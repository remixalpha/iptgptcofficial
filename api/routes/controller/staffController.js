import { staffModel } from "../../models";

export const createData = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).json({ status: false, doNotTrack: "file not found" });
    }
    req.body.fileUrl = req.file?.path;
    // console.log({ req: req.body });
    let doc = await new staffModel(req.body).save();
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    next(err);
  }
};
// get oneHod

export const getDataOne = async (req, res, next) => {
  try {
    let doc = await staffModel.find({ dept: req.body.dept });
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
    // res.status(200).json({ status: false, err: err });
  }
};

export const getData = async (req, res, next) => {
  try {
    let doc = await staffModel.find(req.body);
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
    // res.status(200).json({ status: false, err: err });
  }
};

export const deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log({ id: id });
    let doc = await staffModel.findOne({ _id: id });
    if (doc) {
      await staffModel.deleteOne({ _id: id });
      res.status(200).json({
        status: true,
        message: "data deleted successfully",
      });
      return;
    } else {
      res.status(400).json({ status: false, message: "delete failed " });
    }
  } catch (err) {
    next(err);
  }
};

export const updateData = async (req, res, next) => {
  try {
    let isValid = await staffModel.findOne({ _id: req.body._id });

    if (!isValid) {
      res
        .status(400)
        .json({ status: false, doc: {}, message: "_id not exists" });
    } else {
      await staffModel.updateOne({ _id: req.body._id }, { $set: req.body });
      res.status(200).json({
        status: true,
        msg: "updated",
        doc: await staffModel.findOne({ _id: req.body._id }),
      });
    }
  } catch (err) {
    next(err);
  }
};
