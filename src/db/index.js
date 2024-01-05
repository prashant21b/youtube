import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB=async ()=>{
    try{
  const connectionInstances=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
  console.log('MongoDB connected')
  console.log(connectionInstances.connection.host)
    }
    catch(error){
console.log("MongoDB connection error ",error)
process.exit(1);
    }
}
export default connectDB;