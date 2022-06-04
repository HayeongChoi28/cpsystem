import KoaRouter from "koa-router";
import * as authenticationApi from "./authentication.ctrl";

const router = new KoaRouter();

router.post("/login", authenticationApi.login);
router.get("/logout", authenticationApi.logout);

export default router;
