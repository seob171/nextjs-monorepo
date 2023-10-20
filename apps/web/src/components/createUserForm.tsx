"use client";

import { FormEventHandler, useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await axios.post("/api/users", { name, email, role: "user" });
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
