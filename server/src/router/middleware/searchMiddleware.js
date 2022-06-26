const search = async (ctx) => {
  try {
    const { db } = ctx.state;
    const { mongoQuery } = ctx.state;

    // const items = await UserDb.find().skip(offset).limit(limit).sort(sort)
    //   .exec();

    console.log(mongoQuery);

    let newFind = db.find(mongoQuery.filter).limit(mongoQuery.limit);

    if (mongoQuery.select) newFind = newFind.select(mongoQuery.select);
    if (mongoQuery.skip) newFind = newFind.skip(mongoQuery.skip);
    if (mongoQuery.populate) newFind = newFind.populate(mongoQuery.populate);
    if (mongoQuery.sort) newFind = newFind.sort(mongoQuery.sort);

    const items = await newFind.exec();

    ctx.status = 200;
    ctx.body = {
      items,
    };
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export default search;
