import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    staffName: {
      type: String,
    },
    topic: {
      type: String,
    },
    difficulty: {
      type: String,
    },
    questions: {
      type: String,
    },
  },
  { timestamps: true }
);

const questions =
  mongoose.models.questions || mongoose.model("questions", schema);
export default questions;
