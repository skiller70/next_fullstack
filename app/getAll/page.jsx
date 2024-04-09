import ShowButton from "@/components/Home/ShowButton";
import ShowCard from "@/components/Home/ShowCard";
import { getAllUsers } from "@/lib/serverAction/userAction";
import React from "react";

const page = async () => {
  const result = await getAllUsers();


  return (
    <div>
      <ShowButton />

      {result && result.map((item)=>(<>
      
      <ShowCard user={{name:item.name,age:item.age,userId:item.userId}}/>
      
      
      </>))}
    </div>
  );
};

export default page;
