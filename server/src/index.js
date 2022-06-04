import Path from "path";
import Koa from "koa";
import KoaCors from "@koa/cors";
import KoaCompose from "koa-compose";
import KoaHelmet from "koa-helmet";
import KoaBody from "koa-body";
import Router from "@/router";
import Conf from "@/conf";
import Mongoose from "mongoose";

// 몽고 디비에 연결 - Conf.mongoUrl
Mongoose.connect(Conf.mongoUrl);

const app = new Koa();
app.use(KoaCompose([
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
]));

app.use(Router.routes()).use(Router.allowedMethods());

app.listen(Conf.port, () => {
  console.log(`server listening ${Conf.port}`);
});
