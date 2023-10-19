import { Button } from "ui";
import { prisma } from "@/lib/prisma";

import ListUsers from "@/components/listUsers.component";
import CreateUserForm from "@/components/createUserForm";
const Page = async () => {
  let users = await prisma.user.findMany();
  console.log({ users });

  return (
    <div>
      <h1>Web</h1>
      <Button>Click Me!</Button>

      <CreateUserForm />
      <ListUsers />
    </div>
  );
};

export default Page;
