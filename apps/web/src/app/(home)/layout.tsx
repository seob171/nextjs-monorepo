import { PropsWithChildren } from "react";

import Header from "@/app/_common/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
