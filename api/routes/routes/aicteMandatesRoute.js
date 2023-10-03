import express from "express";
var router = express.Router();
var router = express.Router();

import * as aictemandatesController from "../controller/aictemandatesControlller";
import singleImageUploader from "../controller/imageController";
import verify from "../controller/verifyToken";
// requests

router.get("/", aictemandatesController.getData);
router.post("/sort", aictemandatesController.getDataOne);
router.post("/create", singleImageUploader, aictemandatesController.createData);
router.post("/put", verify, aictemandatesController.updateData);
router.post("/del/:id", aictemandatesController.deleteData);
// router.post("/:id", aictemandatesController.getParams);

export default router;
