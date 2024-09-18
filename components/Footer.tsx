import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    links: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
  {
    title: "About",
    links: ["How it works", "Featured", "Partnership", "Business Relation"],
  },
];

export const Footer = () => {
  return (
    <footer className="padding-x">
      <div className="  mx-auto max-w-screen-2xl space-y-8  py-16  lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3   ">
          <div>
            <div className="text-teal-600">
              <Image
                src="/logo.svg"
                alt="Car Hub Logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              Carhub 2024 <br />
              All Rights Reserved ©
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <p className="font-medium text-gray-900">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link href="/" className="text-gray-700 transition hover:opacity-75">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
