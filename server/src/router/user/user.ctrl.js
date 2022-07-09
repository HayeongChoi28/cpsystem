/* eslint-disable no-console */
import UserDb from "@/database/user";
import Boom from "@hapi/boom";

export const setDb = async (ctx, next) => {
  ctx.state.db = UserDb;

  await next();
};

export const getParams = async (ctx, next) => {
  const { id } = ctx.params;

  ctx.state.params = {
    id,
  };

  await next();
};

export const getBody = async (ctx, next) => {
  const {
    id, password, name, role,
  } = ctx.request.body;

  ctx.state.body = {
    id,
    password,
    name,
    role,
  };

  await next();
};

export const get = async (ctx) => {
  const { id } = ctx.state.params;

  const response = await UserDb.findOne({ _id: id }).exec();

  ctx.status = 200;
  ctx.body = response;
};

export const create = async (ctx) => {
  const { id, password, name } = ctx.request.body;

  const newUser = new UserDb({
    id, password, name,
  });

  const response = await newUser.save();

  ctx.status = 200;
  ctx.body = response;
};

export const update = async (ctx) => {
  const { id } = ctx.state.params;
  const { password, name, role } = ctx.state.body;

  await UserDb.updateOne(
    // 검색 조건
    {
      _id: id,
    },
    // 업데이트 구문
    {
      $set:
        {
          password,
          name,
          role,
        },
    },
  ).exec();

  const response = await UserDb.findOne({ _id: id }).exec();

  ctx.status = 200;
  ctx.body = response;
};

export const remove = async (ctx) => {
  const { id } = ctx.params;

  await UserDb.remove({ _id: id });

  ctx.status = 200;
};
