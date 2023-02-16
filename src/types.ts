import {z} from "zod";

export const todoInput = z.string({
    required_error:"Please Provide Notes"
}).min(1).max(255);