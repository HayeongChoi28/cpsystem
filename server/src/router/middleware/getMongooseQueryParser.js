import { MongooseQueryParser } from "mongoose-query-parser";
import Qs from "query-string";

const getMongooseQueryParser = async (ctx, next) => {
  const {
    offset, limit, sort, ...others
  } = ctx.query;

  const mongoQuery = {
    ...others,
  };

  if (!offset || offset < 0) {
    mongoQuery.skip = 0;
  } else {
    mongoQuery.skip = parseInt(offset, 10);
  }

  if (!limit || limit < 0) {
    mongoQuery.limit = 10;
  } else if (limit > 1000) {
    mongoQuery.limit = 1000;
  } else {
    mongoQuery.limit = parseInt(limit, 10);
  }

  if (!sort) {
    mongoQuery.sort = "-createdAt";
  } else {
    mongoQuery.sort = sort;
  }

  const qsString = Qs.stringify(mongoQuery);

  const parser = new MongooseQueryParser();
  const parsed = parser.parse(qsString);

  ctx.state.mongoQuery = parsed;

  await next();
};

export default getMongooseQueryParser;
