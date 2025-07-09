import express from "express";
import connectDB from "./config/db.js";
import User from "./schema/user.js";
import bcrypt from "bcrypt";
import {
  loginSchema,
  registerSchema,
  BlogSchema,
} from "./schema/zodSchema/index.js";
import jwt from "jsonwebtoken";
import Blog from "./schema/blog.js";
const app = express();
const port = 3000;
const skey = "sssh";
import cors from "cors"

let corsOptions = {
   origin : ['http://localhost:4200'],
}
app.use(cors(corsOptions))

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/register", async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues });
  }
  const { email, password, name } = result.data;

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "user already registered" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10); //hashing

    const newUser = await User.create({
      name,
      password: hashedPassword,
      email,
    });
    const token = jwt.sign({ id: newUser.id }, skey); //token creation

    res.status(201).json({ message: "user  registered succesfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
});
app.post("/login", async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.json({ message: result.error.issues });
  }
  const { email, password } = result.data;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ message: "user not registered" });
      return;
    }
    const ispasswordValid = await bcrypt.compare(password, user.password);
    if (!ispasswordValid) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign({ id: user.id }, skey);
    res.json({ message: "login successfull", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.post("/blog", async (req, res) => {
  const authHeader = req.headers["authorization"];
  let token;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1]; // Splits "Bearer <token>" and takes the token part
  }
  console.log(token);
  try {
    const decoded = jwt.verify(token, skey);
    console.log(decoded);

    const result = BlogSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: result.error.issues });
    }
    const { title, excerpt, content } = result.data;
    try {
      const user = await User.findById(decoded.id);
      await Blog.create({
        title,
        content,
        excerpt,
        author: user,
      });

      return res.json({ message: "post created", blogcreate });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
  } catch (error) {
    // Token is invalid or expired
    return res.status(401).send("Access Denied: Invalid or expired token");
  }
});

app.listen(port);
