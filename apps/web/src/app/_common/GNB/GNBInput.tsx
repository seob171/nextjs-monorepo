import SearchInput from "@/components/molecules/input/SearchInput";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const GNBInput = async () => {
  const session = await getServerSession(authOptions);
  // const pathname = headers().get("x-pathname") ?? "";
  // const isWritePage = pageMatcher.isWritePage(pathname);

  if (
    !session
    // || isWritePage
  )
    return <></>;

  return <SearchInput placeholder={"Search"} />;
};

export default GNBInput;
