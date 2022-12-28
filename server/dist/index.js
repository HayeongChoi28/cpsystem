"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _cors = require("@koa/cors");

var _cors2 = _interopRequireDefault(_cors);

var _koaCompose = require("koa-compose");

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _koaHelmet = require("koa-helmet");

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaBody = require("koa-body");

var _koaBody2 = _interopRequireDefault(_koaBody);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _conf = require("./conf");

var _conf2 = _interopRequireDefault(_conf);

var _sqlite = require("sqlite3");

var _sqlite2 = _interopRequireDefault(_sqlite);

var _appRootPath = require("app-root-path");

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _errorHandlerMd = require("./middlewares/errorHandlerMd");

var _errorHandlerMd2 = _interopRequireDefault(_errorHandlerMd);

var _routerMd = require("./middlewares/routerMd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const databaseFile = `${_appRootPath2.default}/datasource/coupon_schema.sqlite`; /* eslint-disable no-console */

const connection = new (_sqlite2.default.verbose().Database)(databaseFile);

const app = new _koa2.default();

connection.get = _util2.default.promisify(connection.get);
connection.all = _util2.default.promisify(connection.all);

app.context.db = connection;

app.use((0, _koaCompose2.default)([_errorHandlerMd2.default, (0, _cors2.default)({ origin: "*", credentials: "true" }), (0, _koaHelmet2.default)(), (0, _koaBody2.default)({
  multipart: true,
  jsonStrict: false,
  formidable: {
    uploadDir: _path2.default.join(__dirname, "../upload"),
    keepExtensions: true
  }
})]));

app.use((0, _routerMd.routerRoutesMd)(_router2.default)).use((0, _routerMd.routerAllowMethodsMd)(_router2.default));

app.listen(_conf2.default.port, () => {
  console.log(`server listening ${_conf2.default.port}`);
});