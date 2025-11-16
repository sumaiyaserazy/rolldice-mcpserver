import { createMcpHandler, withMcpAuth } from "mcp-handler";
import { rollDice } from "@/lib/dice";
import { verifyGoogleToken } from "@/lib/auth";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    // Roll dice tool
    server.tool(
      "roll_dice",
      "Rolls an N-sided die",
      {
        sides: z.number().int().min(2),
      },
      async ({ sides }, extra) => {
        const result = rollDice(sides);
        
        // Log if user is authenticated
        if (extra.authInfo) {
          console.log(`Dice rolled by: ${extra.authInfo.clientId}`);
        }
        
        return {
          content: [result],
        };
      }
    );

    // Get user profile tool
    server.tool(
      "get_user_profile",
      "Get authenticated user profile",
      {},
      async (params, extra) => {
        if (!extra.authInfo) {
          throw new Error("Authentication required");
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(extra.authInfo.extra || {}, null, 2),
            },
          ],
        };
      }
    );
  },
  {
    serverInfo: {
      name: "rolldice-mcp-server",
      version: "1.0.0",
    },
  },
  {
    basePath: "/api",
    verboseLogs: true,
  }
);

// Wrap with authentication middleware
const authenticatedHandler = withMcpAuth(
  handler,
  async (req, bearerToken) => {
    if (!bearerToken) {
      return undefined;
    }

    const user = await verifyGoogleToken(bearerToken);
    if (!user) {
      return undefined;
    }

    return {
      token: bearerToken,
      clientId: user.email || "unknown",
      scopes: [],
      extra: {
        email: user.email,
        name: user.name,
        picture: user.picture,
        sub: user.sub,
      },
    };
  },
  {
    required: false, // Set to true if you want to require authentication for all requests
  }
);

export { authenticatedHandler as GET, authenticatedHandler as POST };
