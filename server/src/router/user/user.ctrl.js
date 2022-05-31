// eslint-disable-next-line no-unused-vars
const get = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    message: "ok",
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  get,
};
