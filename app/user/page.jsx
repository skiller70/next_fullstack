"use client";
import { ShowUi } from "@/components/Home/ShowUi";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { getAllUsers, getUserByUserid} from "@/lib/serverAction/userAction";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

const page = () => {


const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const handleUser = async () => {
    const result = await getUserByUserid({ userId: user });
    const data = await JSON.parse(result);

    setUserDetails([data, ...userDetails]);
  };
  


  const handleAllUser = async()=>{

const result = await getAllUsers()
const data = await JSON.parse(result);

setUserDetails(data);
  }
  
  return (
    <div className=" h-screen w-full flex  items-center justify-center flex-col gap-8">
      <div>
        <ShowUi data={userDetails} />
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
