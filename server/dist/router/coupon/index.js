"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _coupon = require("./coupon.ctrl");

var couponCtrl = _interopRequireWildcard(_coupon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.post("/", couponCtrl.validateData, couponCtrl.saveData, couponCtrl.response);
// router.get("/:id", couponCtrl.validateId, couponCtrl.read, couponCtrl.response);

exports.default = router;