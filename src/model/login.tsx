import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  userName: {
    type: String,
  },
  pass: {
    type: String,
  },
});

const teacherLogin =
  mongoose.models.teacherlogins || mongoose.model("teacherlogins", schema);
export default teacherLogin;
