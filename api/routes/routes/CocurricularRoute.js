import express from "express";
var router = express.Router();
var router = express.Router();

import * as cocurricularController from "../controller/cocurricularController";
import singleImageUploader from "../controller/imageController";
// requests

router.get("/", cocurricularController.getData);
router.post("/sort/:dept", cocurricularController.getDataOne);
router.post("/create", singleImageUploader, cocurricularController.createData);
router.post("/put", cocurricularController.updateData);
router.post("/del/:id", cocurricularController.deleteData);
// router.post("/:id", hodController.getParams);

export default router;
