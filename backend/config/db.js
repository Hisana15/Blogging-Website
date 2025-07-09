import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blog")
        console.log("mongoDB connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}
export default connectDB