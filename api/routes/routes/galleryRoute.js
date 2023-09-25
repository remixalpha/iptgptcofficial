import express from "express";
var router = express.Router();
var router = express.Router();

import * as galleryController from "../controller/galleryController";
import singleImageUploader from "../controller/imageController";
// requests

router.post("/", galleryController.getData);
router.post("/sort", galleryController.getDataOne);
router.post("/create", singleImageUploader, galleryController.createData);
router.post("/put", galleryController.updateData);
router.post("/del/:id", galleryController.deleteData);
// router.post("/:id", galleryController.getParams);

export default router;
