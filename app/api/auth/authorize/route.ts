import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const redirectUri = searchParams.get("redirect_uri");
  const state = searchParams.get("state");
  const codeChallenge = searchParams.get("code_challenge");
  
  // Validate parameters
  if (!redirectUri || !state || !codeChallenge) {
    return NextResponse.json(
      { error: "invalid_request" },
      { status: 400 }
    );
  }
  
  // Build Google OAuth URL
  const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  googleAuthUrl.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID!);
  googleAuthUrl.searchParams.set("redirect_uri", `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`);
  googleAuthUrl.searchParams.set("response_type", "code");
  googleAuthUrl.searchParams.set("scope", "openid email profile");
  googleAuthUrl.searchParams.set("state", JSON.stringify({ state, redirectUri, codeChallenge }));
  
  return NextResponse.redirect(googleAuthUrl);
}
