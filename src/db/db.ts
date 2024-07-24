import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MONGODB CONNECTED \n DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED",error);
    process.exit(1);
  }
};

export default connectDB;

