import mongoose from "mongoose";

const { Schema } = mongoose;

const commonSchema = new Schema({
  // 발행일, 생성일
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 수정일
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default commonSchema;
