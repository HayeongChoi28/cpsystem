import KoaRouter from "koa-router";
import * as userApi from "./user.ctrl";

const router = new KoaRouter();

router.get("/", userApi.getQueryString, userApi.search);
router.get("/:id", userApi.getParams, userApi.get);
router.post("/", userApi.create);
router.put("/:id", userApi.getParams, userApi.getBody, userApi.update);
router.delete("/:id", userApi.remove);

export default router;
