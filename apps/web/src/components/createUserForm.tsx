"use client";

import { FormEventHandler, useState } from "react";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      body: JSON.stringify({ name, email, role: "user" }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={"flex flex-col gap-2 p-4 border"}
      >
        <input
          className={"border-b"}
          type="text"
          name={"name"}
          placeholder={"name"}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className={"border-b"}
          type="email"
          name={"email"}
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className={"bg-gray-400 p-2 rounded-md"}>signUp</button>
      </form>
    </>
  );
};

export default CreateUserForm;
