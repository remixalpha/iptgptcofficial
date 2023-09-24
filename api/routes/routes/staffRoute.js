import express from "express";
var router = express.Router();
var router = express.Router();

import * as staffController from "../controller/staffController";
import singleImageUploader from "../controller/imageController";
// requests

router.post("/", staffController.getData);
router.post("/sort", staffController.getDataOne);
router.post("/create", singleImageUploader, staffController.createData);
router.post("/put", staffController.updateData);
router.post("/del/:id", staffController.deleteData);
// router.post("/:id", staffController.getParams);

export default router;
