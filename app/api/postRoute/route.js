import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo/database";
import { USER } from "@/lib/mongo/schema";

connectMongo();

export async function POST(req) {
  try {

    const body = await req.json();
    await USER.create(body);

    return NextResponse.json(
      { message: "data save successfully" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
