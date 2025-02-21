"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogInput = exports.CreateBlogInput = exports.SignInInput = exports.SignUpInput = void 0;
const zod_1 = require("zod");
exports.SignUpInput = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    name: zod_1.z.string().optional(),
});
exports.SignInInput = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.CreateBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    input: zod_1.z.string(),
});
exports.UpdateBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    input: zod_1.z.string(),
    id: zod_1.z.string(),
});
