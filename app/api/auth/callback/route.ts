import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  
  if (!code || !state) {
    return NextResponse.json(
      { error: "Missing code or state" },
      { status: 400 }
    );
  }
  
  const stateData = JSON.parse(state);
  
  // Exchange authorization code for tokens
  const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
  );
  
  const { tokens } = await client.getToken(code);
  
  // Redirect back to MCP client with token
  const callbackUrl = new URL(stateData.redirectUri);
  callbackUrl.searchParams.set("code", tokens.id_token!);
  callbackUrl.searchParams.set("state", stateData.state);
  
  return NextResponse.redirect(callbackUrl);
}
