/* eslint-disable no-console */
import Path from "path";
import Koa from "koa";
import KoaCors from "@koa/cors";
import KoaCompose from "koa-compose";
import KoaHelmet from "koa-helmet";
import KoaBody from "koa-body";
import Router from "@/router";
import Conf from "@/conf";
import mysql from "mysql";
import errorHandlerMd from "./middlewares/errorHandlerMd";
import { routerAllowMethodsMd, routerRoutesMd } from "./middlewares/routerMd";

var connection = mysql.createConnection({
  host     : Conf.mysqlHost,
  user     : Conf.mysqlUser,
  password : Conf.mysqlPassword,
  database : Conf.mysqlDatabase,
});
connection.connect();

const app = new Koa();

app.context.db = connection;

app.use(
  KoaCompose([
    errorHandlerMd,
    KoaCors({ origin: "*", credentials: "true" }),
    KoaHelmet(),
    KoaBody({
      multipart: true,
      jsonStrict: false,
      formidable: {
        uploadDir: Path.join(__dirname, "../upload"),
        keepExtensions: true,
      },
    }),
  ])
);

app.use(routerRoutesMd(Router)).use(routerAllowMethodsMd(Router));

app.listen(Conf.port, () => {
  console.log(`server listening ${Conf.port}`);
});
