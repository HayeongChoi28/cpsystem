import KoaRouter from "koa-router";
import userRouter from "./user";
import authenticationRouter from "./authentication";
import itemRouter from "./item";
import couponRouter from "./coupon";

const router = new KoaRouter({
  prefix: "/api/v1",
});

router.use("/users", userRouter.routes());
router.use("/items", itemRouter.routes());
router.use("/authentication", authenticationRouter.routes());
router.use("/coupon", couponRouter.routes());

export default router;
