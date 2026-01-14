import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    fullname: v.string(),
    email: v.string(),
    image_url: v.optional(v.string()),
    clerkId: v.string(),
  }).index("byClerkId", ["clerkId"]),

  friendships: defineTable({
    requesterId: v.id("users"),
    receiverId: v.id("users"),
    status: v.union(v.literal("pending"), v.literal("accepted")),
  }),

  userStatus: defineTable({
    userId: v.id("users"),
    mood: v.string(),
    capacity: v.number(),
    needs: v.string(),
  }),
});
