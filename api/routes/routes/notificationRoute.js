import express from "express";
var router = express.Router();

import * as notificationController from "../controller/notificationController";
import singleImageUploader from "../controller/imageController";
// requests

router.get("/", notificationController.getData);
router.post(
  "/create",
  singleImageUploader,
  notificationController.createDataWithFile
);
router.get("/createLink", notificationController.createDataWithLink);
router.post("/del/:id", notificationController.deleteData);

export default router;
