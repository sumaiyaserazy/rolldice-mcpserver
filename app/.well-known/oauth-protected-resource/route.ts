import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
                  `https://${process.env.VERCEL_URL}`;
  
  return NextResponse.json({
    resource: baseUrl,
    authorization_servers: [`${baseUrl}/.well-known/oauth-authorization-server`],
    bearer_methods_supported: ["header"],
    resource_signing_alg_values_supported: ["RS256"],
  });
}
