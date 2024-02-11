import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ content: z.string().min(1), name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          content: input.content,
        },
      });
    }),

  createComment: publicProcedure
    .input(
      z.object({
        content: z.string().min(1),
        postId: z.number(),
        userName: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.comment.create({
        data: {
          userName: input.userName,
          postId: input.postId,
          content: input.content,
        },
      });
    }),
  getTweet: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        comments: {
          include: { replies: true },
        },
      },
    });
  }),

  createReply: publicProcedure
    .input(
      z.object({
        content: z.string().min(1),
        parentId: z.number().optional(),
        postId: z.number(),
        userName: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.comment.create({
        data: {
          userName: input.userName,
          content: input.content,
          parentId: input.parentId, //  parentId is the ID of the comment we are  replying to 👍, it should be null if we are not replying to a comment.
          postId: input.postId, //post id is the id of the post we are replying to 👍
        },
      });
    }),
});
