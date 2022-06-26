import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  itemName: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});

export default mongoose.model("Item", itemSchema);
