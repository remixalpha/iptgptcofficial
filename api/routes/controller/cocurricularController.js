import { cocurricularModel } from "../../models";

export const createData = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).json({ status: false, doNotTrack: "file not found" });
    }
    let requests = await req.body;
    console.log({ req: requests });
    req.body.fileUrl = req.file?.path;
    let doc = await new cocurricularModel(req.body).save();
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    next(err);
  }
};
// get oneHod

export const getDataOne = async (req, res, next) => {
  try {
    // console.log({ dept: req.params.dept });
    let doc = await cocurricularModel.findOne({ dept: req.params.dept });
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
    // res.status(200).json({ status: false, err: err });
  }
};

export const getData = async (req, res, next) => {
  try {
    let doc = await cocurricularModel.find(req.body);
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
    // res.status(200).json({ status: false, err: err });
  }
};

export const deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc = await cocurricularModel.findOne({ _id: id });
    if (doc) {
      await cocurricularModel.deleteOne({ _id: id });
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
    let isValid = await cocurricularModel.findOne({ _id: req.body._id });

    if (!isValid) {
      res
        .status(400)
        .json({ status: false, doc: {}, message: "_id not exists" });
    } else {
      await cocurricularModel.updateOne(
        { _id: req.body._id },
        { $set: req.body }
      );
      res.status(200).json({
        status: true,
        msg: "updated",
        doc: await cocurricularModel.findOne({ _id: req.body._id }),
      });
    }
  } catch (err) {
    next(err);
  }
};
