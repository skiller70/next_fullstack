"use server";

import { connectMongo } from "../mongo/database";
import { USER } from "../mongo/schema";

export const getUserByUserid = async (params) => {
  try {
 
    await connectMongo();

    const data = await USER.findOne({ userId: params.userId });


return JSON.stringify(data)
    
  } catch (error) {

    console.log(error)
    throw error;
  }
};


export const getAllUsers = async()=>{

try {
  
  connectMongo()
const result = await USER.find({})

return JSON.stringify(result)

} catch (error) {
  
console.log(error)

throw error


}

}