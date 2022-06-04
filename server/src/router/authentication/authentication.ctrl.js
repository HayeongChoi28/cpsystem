export const login = async (ctx, next) => {
  ctx.status = 200;

  ctx.body = {
    message: "login",
  };
};

export const logout = async (ctx, next) => {
  ctx.status = 200;

  ctx.body = {
    message: "logout",
  };
};
