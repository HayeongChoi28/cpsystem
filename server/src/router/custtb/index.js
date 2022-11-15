import KoaRouter from "koa-router";
import * as custtbController from "./custtb.ctrl";

const router = new KoaRouter();

router.get("/", custtbController.read);
router.post("/", custtbController.create);
router.put("/", custtbController.update);
router.delete("/:custId", custtbController.remove);

router.post("/cust/login", custtbController.custlogin);
router.post("/cust/custid", custtbController.custid);
export default router;
