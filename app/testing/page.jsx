
"use client"
import { Button } from "@/components/ui/button";
import { check } from "@/lib/getFun/check";



import React from "react";

const page = async () => {

    const result = await   check()



// const callServer = async()=>{



// }


  return (
    <div>
      <div>page</div>

    </div>
  );
};

export default page;
