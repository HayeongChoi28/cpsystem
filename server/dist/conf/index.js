"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _appRootPath = require("app-root-path");

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _conf = require("./conf");

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// env 설정(default는 dev")

// app-root-path는 애플리케이션의 절대경로를 알려주는 패키지
const env = process.env.NODE_ENV || "dev";
// dotenv를 사용해 ${AppRootPath}/env/${env}.env 파일을 로딩해 process.env로 설정

// 위에서 생성한 conf 파일 import
// dotenv는 해당 파일의 내용을 process.env로 설정하는 패키지
const result = _dotenv2.default.config({ path: `${_appRootPath2.default}/env/${env}.env` });
if (result.error) throw result.error;

// conf 함수 호출 파라미터는 dotenv에서 로딩한 process.env 전달
const config = (0, _conf2.default)(process.env);

console.log(config);

exports.default = config;