import KoaRouter from "koa-router";
import getMongooseQueryParser from "../middleware/getMongooseQueryParser";
import search from "../middleware/searchMiddleware";
import * as userApi from "./user.ctrl";

const router = new KoaRouter();

router.get("/", getMongooseQueryParser, userApi.setDb, search);
router.get("/:id", userApi.getParams, userApi.get);
router.post("/", userApi.create);
router.put("/:id", userApi.getParams, userApi.getBody, userApi.update);
router.delete("/:id", userApi.remove);

export default router;
