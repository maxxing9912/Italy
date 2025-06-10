import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ ok: true });
  }

  const res = NextResponse.redirect("/");
  res.cookies.set("next-auth.session-token", "", { maxAge: 0 });
  return res;
}