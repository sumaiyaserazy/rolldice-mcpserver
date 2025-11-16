import { createMcpHandler } from "mcp-handler";
import { rollDice } from "@/lib/dice";
import { requireAuth } from "@/lib/auth";

const handler = createMcpHandler({
  // Authentication middleware
  async authenticate(authInfo) {
    const user = await requireAuth(authInfo?.token);
    return { user }; // User context injected into all tools
  },
  
  tools: [
    {
      name: "roll_dice",
      description: "Roll dice (authenticated users only)",
      handler: async (params, context) => {
        // context.user contains authenticated user info
        console.log(`Dice rolled by: ${context.user.email}`);
        return rollDice(params);
      }
    },
    {
      name: "get_user_profile",
      description: "Get authenticated user profile",
      handler: async (params, context) => {
        return {
          email: context.user.email,
          name: context.user.name,
          picture: context.user.picture
        };
      }
    }
  ]
});

export { handler as GET, handler as POST };
