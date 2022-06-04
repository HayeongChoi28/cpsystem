import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    // USER: 사용자, WRITER: 작사가, COMPOSER: 작곡가, SINGER: 가수
    enum: ["USER", "WRITER", "COMPOSER", "SINGER"],
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});

export default mongoose.model("User", userSchema);
