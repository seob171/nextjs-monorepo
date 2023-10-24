import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";

export const poppins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: ["500"],
});

export const lineFont = LocalFont({
  src: [
    {
      path: "../fonts/lineFont/LINESeedSans_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/lineFont/LINESeedSans_W_He.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/lineFont/LINESeedSans_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/lineFont/LINESeedSans_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/lineFont/LINESeedSans_W_XBd.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--line-font",
});
