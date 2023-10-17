import { PropsWithChildren } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header className={`flex justify-center w-full h-16 border-b`}>
        <nav className={"max-w-screen-xl w-full"}>
          <ul className={"flex gap-4 items-center w-full h-full"}>
            <li className={"mr-8"}>
              <Logo />
            </li>
            <li>
              <Link href={{ pathname: "/ko-KR", query: { domain: "Movie" } }}>
                Movie
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/ko-KR", query: { domain: "Book" } }}>
                Book
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/ko-KR", query: { domain: "Webtoon" } }}>
                Webtoon
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
