"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const validateData = exports.validateData = async (ctx, next) => {
  await next();
};

const saveData = exports.saveData = async (ctx, next) => {
  await next();
};

const response = exports.response = async ctx => {
  ctx.status = 200;
  ctx.body = "ok";
};