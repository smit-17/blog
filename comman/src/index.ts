import { z } from "zod";

export const SignUpInput = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
});
export const SignInInput = z.object({
  email: z.string(),
  password: z.string(),
});
export const CreateBlogInput = z.object({
  title: z.string(),
  input: z.string(),
});
export const UpdateBlogInput = z.object({
  title: z.string(),
  input: z.string(),
  id: z.string(),
});

export type signUpInput = z.infer<typeof SignUpInput>;
export type signInInput = z.infer<typeof SignInInput>;
export type createBlogInput = z.infer<typeof CreateBlogInput>;
export type updateBlogInput = z.infer<typeof UpdateBlogInput>;
