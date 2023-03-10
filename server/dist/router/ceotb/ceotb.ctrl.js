"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readByCeoId = exports.ceoid = exports.ceologin = exports.remove = exports.update = exports.create = exports.read = undefined;

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const read = exports.read = async ctx => {
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

const create = exports.create = async ctx => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPw, ceoPt } = ctx.request.body;

    const hashedPassword = await _bcrypt2.default.hashSync(ceoPw, 10);

    const stmt = db.prepare("INSERT INTO ceotb (ceoId, ceoPw, ceoPt) VALUES (?, ?, ?)");
    stmt.run(ceoId, hashedPassword, ceoPt);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

// export const update = async (ctx) => {
//   try {
//     const { db } = ctx;
//     const { ceoId, ceoPw, ceoPt } = ctx.request.body;

//     const stmt = db.prepare(
//       "UPDATE ceotb SET ceoPw =? , ceoPt=? where ceoId = ?"
//     );
//     stmt.run(ceoPw, ceoPt, ceoId);
//     stmt.finalize();
//   } catch (e) {
//     console.log(e);
//   }

//   ctx.status = 200;
// };

const update = exports.update = async ctx => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPt } = ctx.request.body;

    const stmt = db.prepare("UPDATE ceotb SET ceoPt=? where ceoId = ?");
    stmt.run(ceoPt, ceoId);
    stmt.finalize();
  } catch (e) {
    console.log(e);
  }

  ctx.status = 200;
};

const remove = exports.remove = async ctx => {
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

const ceologin = exports.ceologin = async ctx => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPw } = ctx.request.body;

    const sql = "SELECT ceoId, ceoPw, ceoPt FROM ceotb where ceoId=?";
    const result = await db.get(sql, [ceoId]);

    if (result.ceoId && result.ceoPw) {
      if (_bcrypt2.default.compareSync(ceoPw, result.ceoPw)) {
        ctx.status = 200;
        ctx.body = {
          ceoId: result.ceoId,
          ceoPt: result.ceoPt
        };
      } else {
        ctx.status = 404;
      }
    } else {
      ctx.status = 404;
    }
  } catch (e) {
    console.log(e);
  }
};

const ceoid = exports.ceoid = async ctx => {
  try {
    const { db } = ctx;
    const { ceoId, ceoPt } = ctx.request.body;

    const sql = "SELECT ceoId, ceoPt FROM ceotb where ceoId=?";
    const result = await db.get(sql, [ceoId, ceoPt]);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
};

// ceoPw??? ????????????, ??????????????? ?????? ?????? ?????????, ?????? ?????? ?????? ???????????? pw??? ????????? ?????? ??????
// ????????? ??? ?????????, ???????????? + ???????????? ???????????? ?????? ?????? ceo??? ????????????, pt??? ???????????? ?????? ???.
// ?????????, ?????? id??? pw??? ???????????? ?????? ????????? ??????????????? ?????????.
/*
export const ceologincheck = async (ctx) => {
  try {
    const { db } = ctx;
    const { ceoPw } = ctx.params;

    const sql = "SELECT ceoPt FROM ceotb where ceoPw=?";
    const result = await db.get(sql, [ceoPw, ceoPt]);
    ctx.status = 200;
    ctx.body = result;
  } catch (e) {
    console.log(e);
  }
}; */

const readByCeoId = exports.readByCeoId = async ctx => {
  try {
    const { db } = ctx;
    const { ceoId } = ctx.params;

    const sql = "SELECT ceoId, ceoPt FROM ceotb where ceoId=?";
    const result = await db.get(sql, [ceoId]);
    ctx.status = 200;
    ctx.body = result;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};