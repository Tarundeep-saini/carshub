"use client";

import { useRouter } from "next/navigation";

const ResetFilters = () => {
  const router = useRouter();

  const handleResetFilter = () => {
    router.push("/", { scroll: false });
  };

  return <button onClick={handleResetFilter}>Reset Filters</button>;
};

export default ResetFilters;
