import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDBB HOST : ${connectionInstance}`)
    } catch (error) {
        console.log("MONGOB connection error", error)
        process.exist(1)
    }
}
export default connectDB