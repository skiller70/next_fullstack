"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userId, setUserID] = useState("");





useEffect(()=>{
const fetchUser = async()=>{
const result = await axios.get("http://localhost:4000/getUserskiller70")
if(result.data){
router.push("/")

}else{
  return false
}

}

fetchUser()
},[])










const handleSubmit = async()=>{

const result = await axios.post("http://localhost:4000/saveUser",{name,age,userId})

}


  return (
    <div className=" flex justify-center  items-center h-screen">
      <div className="flex w-full max-w-sm flex-col items-center gap-5">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
        <Input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="text"
          placeholder="Age"
        />
        <Input  onChange={(e) => {
            setUserID(e.target.value);
          }} type="text" placeholder="UserId" />
        <Button  onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default page;