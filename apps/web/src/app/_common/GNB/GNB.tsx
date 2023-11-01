import Logo from "@/app/_common/Logo";
import NavList from "@/app/_common/GNB/NavList";
import GNBInput from "@/app/_common/GNB/GNBInput";

const GNB = async () => {
  return (
    <header className={`flex justify-center w-full h-20 border-b`}>
      <nav className={"w-full px-6 md:px-12 xl:px-24"}>
        <div className={"flex justify-between items-center h-full"}>
          <div className={"flex items-center gap-x-4"}>
            <Logo />
            <GNBInput />
          </div>
          <ul className={"flex gap-4 items-center h-full"}>
            <NavList />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default GNB;
