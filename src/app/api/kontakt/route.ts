import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // In real usage: send email or store lead in a DB/CRM
    // For now, just log on server and return 200
    console.log("Kontaktförfrågan:", data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


