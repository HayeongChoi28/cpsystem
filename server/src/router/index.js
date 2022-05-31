import KoaRouter from "koa-router";
import userRouter from "./user";

const router = new KoaRouter({
  prefix: "/api/v1",
});

router.use("/users", userRouter.routes());

export default router;
