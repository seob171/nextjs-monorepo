import { PropsWithChildren } from "react";
import Logo from "@/components/Logo";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header className={`flex justify-center w-full h-16 border-b`}>
        <nav className={"w-full px-6 md:px-12 xl:px-24"}>
          <div className={"flex justify-between items-center h-full"}>
            <Logo />
            <ul className={"flex gap-4 items-center h-full"}>
              <li>sign in</li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
