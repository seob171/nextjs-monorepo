import { PAGE_REG_EXP } from "@/constants/regexp";

const pageMatcher: {
  [K in keyof typeof PAGE_REG_EXP]: (pathname: string) => boolean;
} = {
  isWritePage: (pathname: string) => PAGE_REG_EXP.isWritePage.test(pathname),
  isNotificationPage: (pathname: string) =>
    PAGE_REG_EXP.isNotificationPage.test(pathname),
};
export default pageMatcher;
