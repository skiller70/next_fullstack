import { connectMongo } from "@/lib/mongo/database";
import { USER } from "@/lib/mongo/schema";
import { NextResponse } from "next/server";

connectMongo();
export async function POST(req) {
  try {
   
    // const data = await req.json();
const result = await USER.create({})
console.log(result)


    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong with getuser" });
  }
}
