import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const headers = c.req.header("Authorization") || "";
  console.log(headers,"headersheadersheadersheadersheadersheadersheadersheadersheadersheaders");
  
  try {
    const decodeString: any = await verify(headers, "Smit@1212");
    console.log(decodeString);
    
    if (decodeString) {
      c.set("userId", decodeString.id);
      await next();
    } else {
      return c.text("smothing went wrong");
    }
  } catch (e) {
    throw e;
  }
  return c.text("");
});

blogRouter.post("/createBlog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const userId = c.get("userId");
  console.log(userId,"userIduserIduserIduserIduserIduserId");
  
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({ msg: "Blog created successfully", id: post?.id });
  } catch (e) {
    throw e;
  }
});

blogRouter.put("/updateBlog", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.update({
      where: {
        id: body?.id,
      },
      data: {
        title: body?.title,
        content: body?.content,
      },
    });
    return c.json({ msg: "Post updated Successfully", id: post.id });
  } catch (e) {
    throw e;
  }
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  });
  try {
    const posts = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ data: posts });
  } catch (e) {
    throw e;
  }
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: c.req.param("id"),
      },
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ msg: "Here is your post", post: post });
  } catch (e) {
    throw e;
  }
});
