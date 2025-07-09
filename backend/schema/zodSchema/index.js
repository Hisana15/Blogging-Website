import z from "zod";

const registerSchema = z.object({
    name:z.string().min(2),
    email:z.string().email("invalid email"),
    password:z.string().min(6)
})
const loginSchema = registerSchema.omit({name:true})

const BlogSchema = z.object({
        title:z.string().min(2),
        excerpt:z.string(),
        content:z.string(),
})
export {registerSchema,loginSchema,BlogSchema  }
