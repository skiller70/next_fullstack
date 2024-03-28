"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { saveUser } from "@/lib/serverAction/userAction";
import Link from "next/link";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [userId, setUserId] = useState();
const { toast} = useToast()
// SERVER ACTION LOGIC

const handleSave = ()=>{
 if(name){
    saveUser({name,age,userId})

 }else{
    alert("please enter name")
 }



}




  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center gap-5">

<div className=" flex gap-2">
<Link href="/user" className=" bg-black  rounded-sm py-2 px-3 text-white "> Get User</Link> 

<Link href="/deleteUser" className=" bg-black  rounded-sm py-2 px-3 text-white "> Delete User</Link></div>
 
      <div className=" max-w-lg gap-y-2 flex flex-col">
        <Label htmlFor="email">Name</Label>
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className=" max-w-sm gap-y-2 flex flex-col">
        <Label htmlFor="email">Age</Label>
        <Input
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>

      <div className=" max-w-sm gap-y-2 flex flex-col">
        <Label htmlFor="email">User id</Label>
        <Input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
      </div>

      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default page;
