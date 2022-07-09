/* eslint-disable func-names */
import mongoose from "mongoose";

// 하나의 데이터를 저장하는 함수
mongoose.Model.create = function (data) {
  return this.save(data).exec();
};

// 여러개의 데이터를 저장하는 함수,
// ordered = false인 경우, 키가 중복되더라도 해당 에러를 무시하고 다음을 진행
// ordered = true인 경우, 키가 중복되면 에러 리
mongoose.Model.bulk = function ({ bulkData, ordered = false }) {
  return this.insertMany(bulkData, { ordered }).exec();
};

// id에 해당하는 데이터를 삭제하는 함수
mongoose.Model.remove = function ({ id }) {
  return this.deleteOne({ _id: id }).exec();
};

mongoose.Model.findAndRemove = function ({ query }) {
  return this.find(query.filter).deleteMany().exec();
};

mongoose.Model.readOne = function ({ id, query }) {
  let newReadOne = this.findOne({ _id: id });
  if (query.select) newReadOne = newReadOne.select(query.select);
  if (query.populate) newReadOne = newReadOne.populate(query.populate);

  return newReadOne.exec();
};

mongoose.Model.updateOne = function ({ id, data }) {
  return this.findByIdAndUpdate(
    // 검색조건
    { _id: id },
    // 업데이트 데이터
    {
      ...data,
      updatedAt: Date.now,
    },
    // 존재하지 않는 데이터를 업데이트 하는 경우, 에러 발생
    { new: false },
  ).exec();
};

mongoose.Model.readAll = function ({ query }) {
  let newFind = this.find(query.filter).limit(query.limit);

  if (query.select) newFind = newFind.select(query.select);
  if (query.skip) newFind = newFind.skip(query.skip);
  if (query.populate) newFind = newFind.populate(query.populate);
  if (query.sort) newFind = newFind.sort(query.sort);

  return newFind.exec();
};

mongoose.Model.countAll = function ({ query }) {
  let newFind = this.find(query.filter);

  if (query.select) newFind = newFind.select(query.select);
  if (query.populate) newFind = newFind.populate(query.populate);

  return newFind.countDocuments();
};
