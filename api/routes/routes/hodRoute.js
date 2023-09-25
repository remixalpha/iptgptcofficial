import express from "express";
var router = express.Router();
var router = express.Router();

import * as hodController from "../controller/hodController";
import singleImageUploader from "../controller/imageController";
// requests

router.post("/", hodController.getData);
router.post("/sort/:dept", hodController.getDataOne);
router.post("/create", singleImageUploader, hodController.createData);
router.post("/put", hodController.updateData);
router.post("/del/:id", hodController.deleteData);
// router.post("/:id", hodController.getParams);

export default router;
