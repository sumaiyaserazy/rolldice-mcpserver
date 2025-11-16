import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function verifyGoogleToken(token: string) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    
    if (!payload) {
      throw new Error("Invalid token payload");
    }
    
    return {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      sub: payload.sub, // Google user ID
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export async function requireAuth(token?: string) {
  if (!token) {
    throw new Error("Authentication required. Please log in.");
  }
  
  const user = await verifyGoogleToken(token);
  
  if (!user) {
    throw new Error("Invalid authentication token");
  }
  
  return user;
}
