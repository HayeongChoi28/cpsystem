"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _ceotb = require("./ceotb");

var _ceotb2 = _interopRequireDefault(_ceotb);

var _custtb = require("./custtb");

var _custtb2 = _interopRequireDefault(_custtb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import userRouter from "./user";
// import authenticationRouter from "./authentication";
// import itemRouter from "./item";
// import couponRouter from "./coupon";

const router = new _koaRouter2.default({
  prefix: "/api/v1"
});

// 원래는 이렇게 적혀있었음
// router.use("/ceotb", ceotbRouter.routes());
// router.use("/cust", custtbRouter.routes());

// 새로 고친 코드
router.use("/cust", _custtb2.default.routes());
// "/cust"로 하면 test 날렸을 때 POST {{BASEURL}}/cust는 200인데
// POST {{BASEURL}}/cust/login가 404 에러뜸..
// "/custtb"로 하면 둘다 404에러뜸..

router.use("/ceotb", _ceotb2.default.routes());

// router.use("/users", userRouter.routes());
// router.use("/items", itemRouter.routes());
// router.use("/authentication", authenticationRouter.routes());
// router.use("/coupon", couponRouter.routes());

exports.default = router;