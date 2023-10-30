import { PropsWithChildren } from "react";

import GNB from "@/app/_common/GNB/GNB";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <GNB />
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
