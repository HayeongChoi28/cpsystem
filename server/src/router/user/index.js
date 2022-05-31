import KoaRouter from "koa-router";
import * as userApi from "./user.ctrl";

const router = new KoaRouter();

router.get("/", userApi.get);

export default router;
