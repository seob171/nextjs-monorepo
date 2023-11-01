"use client";

import { usePathname } from "next/navigation";
import { PAGE_REG_EXP } from "@/constants/regexp";
import pageMatcher from "@/utils/pageMatcher";

type PageType = keyof typeof PAGE_REG_EXP;
const usePageMatcher = (page: PageType) => {
  const pathname = usePathname();

  return pageMatcher[page](pathname);
};

export default usePageMatcher;
