"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerAllowMethodsMd = exports.routerRoutesMd = undefined;

var _boom = require("@hapi/boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routerRoutesMd = r => r.routes(); // 위 src/index.js에서 생성한 routerRoutesMd, routerAllowMethodsMd를 별도의 파일로 분리

const routerAllowMethodsMd = r => r.allowedMethods({
  throw: true,
  notImplemented: () => _boom2.default.notImplemented("that method is not allowed"),
  methodNotAllowed: () => _boom2.default.methodNotAllowed("that method is not allowed")
});

// 두 함수 export
exports.routerRoutesMd = routerRoutesMd;
exports.routerAllowMethodsMd = routerAllowMethodsMd;