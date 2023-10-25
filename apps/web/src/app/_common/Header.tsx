import Logo from "@/app/_common/Logo";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`flex justify-center w-full h-20 border-b`}>
      <nav className={"w-full px-6 md:px-12 xl:px-24"}>
        <div className={"flex justify-between items-center h-full"}>
          <Logo />
          <ul className={"flex gap-4 items-center h-full"}>
            <Link href={`/login?modal=true`}>
              <li>signIn</li>
            </Link>
            <li>
              <Link href={`/signUp?modal=true`}>
                <Button layout={"ghost"} className={"rounded-full"}>
                  get Started
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
