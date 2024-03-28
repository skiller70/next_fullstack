"use client";
import { ShowUi } from "@/components/Home/ShowUi";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { getAllUsers, getUserByUserid } from "@/lib/serverAction/userAction";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState("");
  const [getUsers, setGetUsers] = useState([]);

  const handleUser = async () => {
    const result = await getUserByUserid({ userId: user });
    const data = await JSON.parse(result);
    setGetUsers([data, ...getUsers]);
  };

  const handleAllUser = async () => {
    const result = await getAllUsers();
    const data = await JSON.parse(result);
    console.log(data);

    setGetUsers([]);
    setGetUsers(data);
  };

  return (
    <div className=" h-screen w-full flex  items-center justify-center flex-col gap-8">
      <div className=" flex gap-2">
        <Link
          href="/saveUser"
          className=" bg-black  rounded-sm py-2 px-3 text-white "
        >
          {" "}
          Save User
        </Link>

        <Link
          href="/deleteUser"
          className=" bg-black  rounded-sm py-2 px-3 text-white "
        >
          {" "}
          Delete User
        </Link>
      </div>
      <div className=" relative ">
        <h1 className=" absolute mt-5 pl-10 z-20 text-white max-md:text-sm md:text-2xl">
          hello{" "}
        </h1>
        <Image
          className=" "
          src="/img/img1.jpg"
          alt="img1"
          width={500}
          height={500}
        />
      </div>

      <div>
        <ShowUi data={getUsers} />
      </div>

      <div className=" flex flex-col justify-center items-center gap-8">
        <div className=" max-w-sm gap-y-2 flex flex-col">
          <Label htmlFor="email">User id</Label>
          <Input onChange={(e) => setUser(e.target.value)} />
        </div>
        <Button onClick={handleUser}>Get USER</Button>
        <Button onClick={handleAllUser}>Get ALL USER</Button>
      </div>
    </div>
  );
};

export default page;
