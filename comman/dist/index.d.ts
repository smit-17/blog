import { z } from "zod";
export declare const SignUpInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const SignInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const CreateBlogInput: z.ZodObject<{
    title: z.ZodString;
    input: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    input: string;
}, {
    title: string;
    input: string;
}>;
export declare const UpdateBlogInput: z.ZodObject<{
    title: z.ZodString;
    input: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    input: string;
    id: string;
}, {
    title: string;
    input: string;
    id: string;
}>;
export type signUpInput = z.infer<typeof SignUpInput>;
export type signInInput = z.infer<typeof SignInInput>;
export type createBlogInput = z.infer<typeof CreateBlogInput>;
export type updateBlogInput = z.infer<typeof UpdateBlogInput>;
