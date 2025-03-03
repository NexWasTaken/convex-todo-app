import { v } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";

export const internalAdd = internalMutation({
  args: {
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      content: args.content,
    });
  },
});

export const add = mutation({
  args: {
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      content: args.content,
    });
  },
});

export const get = query({
  args: {},
  handler(ctx) {
    return ctx.db.query("todos").collect();
  },
});
