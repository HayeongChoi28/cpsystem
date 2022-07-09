import mongoose from "mongoose";
import commonSchema from "./common";

const { Schema } = mongoose;

const couponSchema = new Schema({
  // 쿠폰 번호
  couponNo: {
    type: String,
    unique: true,
    required: true,
  },
  // 발행처
  issuer: {
    type: String,
    required: true,
  },
  // 사용자
  user: {
    type: String,
    require: true,
  },
  ...commonSchema.obj,
});

export default mongoose.model("Coupon", couponSchema);
