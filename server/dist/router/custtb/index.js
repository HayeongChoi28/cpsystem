"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _custtb = require("./custtb.ctrl");

var custtbController = _interopRequireWildcard(_custtb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.get("/", custtbController.read);
router.post("/", custtbController.create);
router.put("/", custtbController.update);
router.delete("/:custId", custtbController.remove);

router.post("/login", custtbController.custlogin);
// router.post("/custid", custtbController.custid);

router.get("/:custId", custtbController.readByCustId);
router.get("/:custPt", custtbController.readByCustPt);
// path param

exports.default = router;