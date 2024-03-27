import mongoose from "mongoose";
export const connectMongoDB = async () => {
  try {
    // console.log("asdf");
    await mongoose.connect(process.env.ATLAS_URL as string);
    console.log("connected to mongoose");
  } catch (err) {
    console.log("err");
  }
};
