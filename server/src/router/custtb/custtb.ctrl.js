// custtb에 custId, custPw, custPt
export const read = async (ctx) => {
  try {
    const { db } = ctx;

    const sql = "SELECT custId, custPw, custPt FROM custtb";
    const result = await db.all(sql);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (ctx) => {
  try {
    const { db } = ctx;
    const { custId, custPw, custPt } = ctx.request.body;

    const stmt = db.prepare(
      "INSERT INTO custtb (custId, custPw, custPt) VALUES (?, ?, ?)",
    );
    stmt.run(custId, custPw, custPt);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const update = async (ctx) => {
  try {
    const { db } = ctx;
    const { custId, custPw, custPt } = ctx.request.body;

    const stmt = db.prepare(
      "UPDATE custtb SET custPw =? , custPt=? where custId = ?",
    );
    stmt.run(custPw, custPt, custId);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const remove = async (ctx) => {
  try {
    const { db } = ctx;
    const { custId } = ctx.params;

    const stmt = db.prepare("DELETE FROM custtb where custId = ?");
    stmt.run(custId);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const custlogin = async (ctx) => {
  try {
    const { db } = ctx;
    const { custId, custPw } = ctx.request.body;

    const sql = "SELECT custId, custPw FROM custtb where custId=? and custPw=?";
    const result = await db.get(sql, [custId, custPw]);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
};

export const custid = async (ctx) => {
  try {
    const { db } = ctx;
    const { custId, custPt } = ctx.request.body;

    const sql = "SELECT custId, custPt FROM custtb where custId=?";
    const result = await db.get(sql, [custId, custPt]);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
};
