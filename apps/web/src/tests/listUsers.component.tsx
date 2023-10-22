"use client";

import { User } from "@prisma/client";
import React, { cache, use } from "react";

const getUsers = cache(() =>
  fetch("http://localhost:3000/api/users").then((res) => res.json()),
);

export default function ListUsers() {
  let users = use<User[]>(getUsers());

  return (
    <div className={"grid grid-cols-4 gap-5"}>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
