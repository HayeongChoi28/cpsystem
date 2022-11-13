export const read = async (ctx) => {
  try {
    const { db } = ctx;

    const sql = "SELECT ceoId, ceoPw, ceoPt FROM ceotb";
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
    const { ceoId, ceoPw, ceoPt } = ctx.request.body;

    const stmt = db.prepare(
      "INSERT INTO ceotb (ceoId, ceoPw, ceoPt) VALUES (?, ?, ?)"
    );
    stmt.run(ceoId, ceoPw, ceoPt);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const update = async (ctx) => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPw, ceoPt } = ctx.request.body;

    const stmt = db.prepare(
      "UPDATE ceotb SET ceoPw =? , ceoPt=? where ceoId = ?"
    );
    stmt.run(ceoPw, ceoPt, ceoId);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const remove = async (ctx) => {
  try {
    const { db } = ctx;
    const { ceoId } = ctx.params;

    const stmt = db.prepare("DELETE FROM ceotb where ceoId = ?");
    stmt.run(ceoId);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

export const ceologin = async (ctx) => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPw } = ctx.request.body;

    const sql = "SELECT ceoId, ceoPw FROM ceotb where ceoId=? and ceoPw=?";
    const result = await db.get(sql, [ceoId, ceoPw]);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
};
