import { demoModel } from "../../models";
import Joi from "joi";
export const createData = async (req, res, next) => {
  try {
    let requests = await req.body;
    // console.log({ req: requests });
    let doc = await new demoModel(req.body).save();
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    next(err);
  }
};

// get color

export const getData = async (req, res, next) => {
  try {
    let doc = await demoModel.find(req.body);
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    // next(err);
    res.status(200).json({ status: false, err: err });
  }
};
// sortOne data
export const sortData = async (req, res, next) => {
  try {
    let doc = await demoModel.findOne({ _id: req.body._id });
    if (!doc) {
      res.status(200).json({ status: true, doc: " not exist" });
    } else {
      res.status(200).json({ status: true, doc: doc });
    }
  } catch (err) {
    next(err);
  }
};

// delete data

  export const deleteData = async (req, res, next) => {
    try {
      let doc = await demoModel.findOne({ _id: req.body._id });
      if (doc) {
        await demoModel.deleteOne({ _id: req.body._id });
        res.status(200).json({
          status: true,
          message: "data deleted successfully",
        });
        return;
      } else {
        res
          .status(400)
          .json({ status: false, message: "delete failed category not found" });
      }
    } catch (err) {
      next(err);
    }
  };

// update data

export const updateData = async (req, res, next) => {
  try {
    let isValid = await demoModel.findOne({ _id: req.body._id });

    if (!isValid) {
      res
        .status(400)
        .json({ status: false, doc: {}, message: "_id not exists" });
    } else {
      await demoModel.updateOne({ _id: req.body._id }, { $set: req.body });
      res.status(200).json({
        status: true,
        msg: "updated",
        doc: await demoModel.findOne({ _id: req.body._id }),
      });
    }
  } catch (err) {
    next(err);
  }
};
export const getParams = async (req, res, next) => {
  try {
    const params = req.params.id;
    if (params == "cs") {
      res.status(200).json({ status: true, doc: "cs dept" });
    }
    if (params == "pt") {
      res.status(200).json({ status: true, doc: "pt dep" });
    }
  } catch (err) {
    // next(err);
    res.status(200).json({ status: false, err: err });
  }
};
