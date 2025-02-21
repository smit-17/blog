import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        name: body?.name,
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, "Smit@1212");
    return c.json({
      msg: "User created Successfully",
      token: jwt,
    });
  } catch (error) {
    c.status(403);
    return c.json({ msg: "Email with this  User already created" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.findFirst({
      where: { email: body?.email, password: body.password },
    });
    if (user) {
      const jwt = await sign({ id: user?.id }, "Smit@1212");
      return c.json({ msg: "Login Successfully", token: jwt });
    } else {
      c.status(403);
      return c.json({ msg: "User does not exist" });
    }
  } catch (e) {
    throw e;
  }
});
