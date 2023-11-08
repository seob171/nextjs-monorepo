import { PropsWithChildren } from "react";
import GNB from "@/app/_common/GNB/GNB";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GNB />
      {children}
    </>
  );
};

export default layout;
