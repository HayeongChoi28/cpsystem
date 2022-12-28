"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _ceotb = require("./ceotb.ctrl");

var ceotbController = _interopRequireWildcard(_ceotb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.get("/", ceotbController.read);
router.post("/", ceotbController.create);
router.put("/", ceotbController.update);
router.delete("/:ceoId", ceotbController.remove);

router.post("/login", ceotbController.ceologin);
router.post("/ceoid", ceotbController.ceoid);

router.get("/:ceoId", ceotbController.readByCeoId);

// router.post("/ceo/checkpw", ceotbController.ceologincheck);
// 이것도 전에 쓰던 함수라 일단 주석처리...

// ceo가 pw를 입력하면, coin이 나오도록
// router.get("/:custPw", ceotbController.ceologincheck);

exports.default = router;