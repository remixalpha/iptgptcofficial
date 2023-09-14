import express from "express";
var router = express.Router();
var router = express.Router();

import * as principalController from "../controller/principalController";
import singleImageUploader from "../controller/imageController";
// requests

router.get("/", principalController.getData);
router.post("/create", singleImageUploader, principalController.createData);
router.post("/put", principalController.updateData);
// router.post("/:id", principalController.getParams);

export default router;
