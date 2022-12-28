"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boom = require("@hapi/boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const errorHandlerMd = async (ctx, next) => {
  try {
    await next();

    // Boom으로 변경
    if (ctx.status === 404) {
      throw _boom2.default.notFound("not found");
    }
  } catch (err) {
    // Boom으로 변경
    // boom에서 발생한 output.statusCode를 ctx.status로 설정
    ctx.status = err.output && err.output.statusCode ? err.output.statusCode : 500;

    // Boom으로 변경
    // boom에서 발생한 output.payload를 ctx.body로 설정
    ctx.body = err.output && err.output.payload ? err.output.payload : {
      statusCode: ctx.status,
      error: "Internal Server Error",
      message: "Unknown Error"
    };

    // ctx.app.emit("error", err, ctx);
  }
}; // ctx.throw로 작성된 부분을 boom 패키지로 변경한다.
// boom import
exports.default = errorHandlerMd;