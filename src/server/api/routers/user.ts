import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ name: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 13);

      return ctx.db.user.create({
        data: {
          name: input.name,
          password: hashedPassword,
        },
      });
    }),
  loginUser: publicProcedure
    .input(z.object({ name: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: {
          name: input.name,
        },
      });

      if (!user) {
        throw new Error("Invalid Credentials");
      }

      const passwordMatch = await bcrypt.compare(input.password, user.password);

      if (!passwordMatch) {
        throw new Error("Invalid credentials");
      }
      const token = jwt.sign(
        { userId: user.id, userName: user.name },
        process.env.JWT_SECRET!,
      );
      return { name: user.name, token };
    }),

  getUser: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ ctx, input }) => {
      const decoded = jwt.verify(
        input.token,
        process.env.JWT_SECRET!,
      ) as JwtPayload;
      console.log("decoded:", decoded);
      return ctx.db.user.findFirst({
        where: {
          name: decoded.userName,
        },
        select: {
          name: true,
        },
      });
    }),
});
