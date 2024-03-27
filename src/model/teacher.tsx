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

const Chatbox =
  mongoose.models.Chatbox || mongoose.model("teacherLogin", schema);
export default Chatbox;
