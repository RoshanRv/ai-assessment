import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  staffName: {
    type: String,
  },
  StaffId: {
    type: String,
  },
  questions: {
    type: String,
  },
});

const questions =
  mongoose.models.questions || mongoose.model("questions", schema);
export default questions;
