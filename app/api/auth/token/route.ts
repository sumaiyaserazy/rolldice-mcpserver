import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { code, redirect_uri } = body;
  
  // Exchange code for token with Google
  const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri
  );
  
  const { tokens } = await client.getToken(code);
  
  return NextResponse.json({
    access_token: tokens.id_token, // Use ID token as access token
    token_type: "Bearer",
    expires_in: 3600,
  });
}
