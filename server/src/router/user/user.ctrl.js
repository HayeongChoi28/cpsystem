/* eslint-disable no-console */
import UserDb from "@/database/user";

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

export const search = async (ctx) => {
  try {
    const items = await UserDb.find().exec();

    ctx.status = 200;
    ctx.body = {
      items,
    };
  } catch (e) {
    ctx.status = 500;
  }
};

export const get = async (ctx) => {
  try {
    const { id } = ctx.state.params;

    const response = await UserDb.findOne({ _id: id }).exec();

    ctx.status = 200;
    ctx.body = response;
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const create = async (ctx) => {
  try {
    const { id, password, name } = ctx.request.body;

    const newUser = new UserDb({
      id, password, name,
    });

    const response = await newUser.save();

    ctx.status = 200;
    ctx.body = response;
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const update = async (ctx) => {
  try {
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
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const remove = async (ctx) => {
  try {
    const { id } = ctx.params;

    await UserDb.remove({ _id: id });

    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};
