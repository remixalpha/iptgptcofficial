import { notificationModel } from "../../models";
import Joi from "joi";
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
      res.status(400).json({ status: false, doNotTrack: "file not found" });
    }
    req.body.fileUrl = req.file?.path;
    const doc = await notificationModel.create(req.body);
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    // next(err);
    res.status(400).json({ status: false, err_message: err.message });
  }
};
