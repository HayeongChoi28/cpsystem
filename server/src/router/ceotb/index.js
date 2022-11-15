import KoaRouter from "koa-router";
import * as ceotbController from "./ceotb.ctrl";

const router = new KoaRouter();

router.get("/", ceotbController.read);
router.post("/", ceotbController.create);
router.put("/", ceotbController.update);
router.delete("/:ceoId", ceotbController.remove);

router.post("/ceo/login", ceotbController.ceologin);
router.post("/ceo/checkpw", ceotbController.ceologincheck);
export default router;
