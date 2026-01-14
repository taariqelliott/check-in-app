import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    username: v.string(),
    fullname: v.string(),
    email: v.string(),
    image_url: v.optional(v.string()),
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const exisitingUser = await ctx.db
      .query("users")
      .withIndex("byClerkId", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (exisitingUser) return;

    // create a user in db
    await ctx.db.insert("users", {
      username: args.username,
      fullname: args.fullname,
      email: args.email,
      image_url: args.image_url,
      clerkId: args.clerkId,
    });
  },
});
