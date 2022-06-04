import KoaRouter from "koa-router";
import userRouter from "./user";
import authenticationRouter from "./authentication";

const router = new KoaRouter({
  prefix: "/api/v1",
});

router.use("/users", userRouter.routes());
router.use("/authentication", authenticationRouter.routes());

export default router;
