import { notificationModel } from "../../models";
import Joi from "joi";
export const getData = async (req, res, next) => {
  try {
    // req.body.fileUrl = "";
    const doc = await notificationModel.find(req.body);
    res.status(200).json({ status: true, doNotTrack: doc });
  } catch (err) {
    // next(err);
    res.status(400).json({ status: false, err_message: err.message });
  }
};
export const createDataWithLink = async (req, res, next) => {
  try {
    // req.body.fileUrl = "";
    const doc = await notificationModel.create(req.body);
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    // next(err);
    res.status(400).json({ status: false, err_message: err.message });
  }
};
export const createDataWithFile = async (req, res, next) => {
  try {
    if (!req.file) {
      const doc = await notificationModel.create(req.body);
      return res.status(201).json({ status: true, doNotTrack: doc });
      // res.status(400).json({ status: false, doNotTrack: "file not found" });
    }
    req.body.fileUrl = req.file?.path;
    const doc = await notificationModel.create(req.body);
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    // next(err);
    res.status(400).json({ status: false, err_message: err.message });
  }
};
export const deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc = await notificationModel.findOne({ _id: id });
    if (doc) {
      await notificationModel.deleteOne({ _id: id });
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
