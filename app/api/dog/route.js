import { dog } from "@/assets/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(dog);
}
