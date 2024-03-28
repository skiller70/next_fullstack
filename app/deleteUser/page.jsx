"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { deleteUser } from "@/lib/serverAction/userAction";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
const [userId, setUserId] = useState("")
const { toast } = useToast()
const handleDelete = async()=>{
const result = await deleteUser({userId})


if(result.message == "ok"){

  toast({
  
    title: " User Delete ",
    description: "User delete Successfully",
  
  })
}else{
  toast({
    variant: "destructive",
    title: " User Delete ",
    description: "Failed to delete user",
  
  })
}

}
  return (
    <div className=" w-full h-screen flex justify-center items-center flex-col gap-8">

<div className=" flex gap-2">
        <Link
          href="/saveUser"
          className=" bg-black  rounded-sm py-2 px-3 text-white "
        >
          {" "}
          Save User
        </Link>

        <Link
          href="/user"
          className=" bg-black  rounded-sm py-2 px-3 text-white "
        >
          {" "}
          Get User
        </Link>
      </div>


      <div className=" max-w-md gap-y-4 flex flex-col">
        <Label htmlFor="email">User id</Label>
        <Input onChange={(e)=>{setUserId(e.target.value)}} />
        <Button onClick={handleDelete}>Delete User</Button>


      </div>
    </div>
  );
};

export default page;
