import express from "express";
var router = express.Router();
var router = express.Router();

import * as heroImgController from "../controller/heroImgController";
import singleImageUploader from "../controller/imageController";
// requests

router.get("/", heroImgController.getData);
router.post("/create", singleImageUploader, heroImgController.createData);
router.post("/put", heroImgController.updateData);
router.post("/del/:id", heroImgController.deleteData);

export default router;
