import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Mongo");
  } catch (error) {
    console.log("Not connected to Mongo: ", error);
  }
};
