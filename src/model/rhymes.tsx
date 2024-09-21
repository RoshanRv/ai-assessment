import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    email: {
      type: String,
    },
    rhymes: [
      {
        id: String,
        title: String,
        video_url: String,
      },
    ],
  },
  { timestamps: true }
);

const rhymes = mongoose.models.rhymes || mongoose.model("rhymes", schema);
export default rhymes;
