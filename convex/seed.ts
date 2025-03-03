import { internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const seedDb = internalMutation({
  args: {},
  handler(ctx, args) {
    const todos = [
      { content: "Buy groceries" },
      { content: "Finish reading a book" },
      { content: "Go for a 30-minute walk" },
      { content: "Reply to important emails" },
      { content: "Plan the weekend trip" },
      { content: "Work on a side project" },
      { content: "Organize the workspace" },
      { content: "Call a friend or family member" },
      { content: "Practice coding for an hour" },
      { content: "Meditate for 10 minutes" },
    ];

    for (const t of todos) {
      ctx.runMutation(internal.todos.internalAdd, { content: t.content });
    }
  },
});
