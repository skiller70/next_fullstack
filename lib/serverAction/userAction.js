"use server";

import { connectMongo } from "../mongo/database";
import { USER } from "../mongo/schema";



// GET ONLY USER BY ID
export const getUserByUserid = async (params) => {
  try {
    console.log(params);

    await connectMongo();

    const data = await USER.findOne({ userId: params.userId });

    return JSON.stringify(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// GET ALL USER FROM DATA BASE

export const getAllUsers = async () => {
  try {
    connectMongo();
    const result = await USER.find({});

    return result
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// SAVE USERS IN DATABASE




export const saveUser = async(params)=>{
try {
  connectMongo();

await USER.create(params)


} catch (error) {
  console.log(error)
  throw error
}


}
// DELETE USERS IN DATABASE

export const deleteUser = async(params)=>{
  try {
 
    connectMongo();
  
const data =  await USER.findOneAndDelete(params)
  console.log(data)

 if(data !== null ){
  return {message:"ok"}
 } else{
  return {message:"error"}
 }
  
  } catch (error) { 
    console.log(error)
    throw error
  }
  
  
  }


