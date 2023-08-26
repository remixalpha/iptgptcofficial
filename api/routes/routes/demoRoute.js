import express from "express";
var router = express.Router();
var router = express.Router();

import * as demoController from "../controller/demoController";

// requests

router.get("/", demoController.getData);
router.post("/create", demoController.createData);
router.post("/put", demoController.updateData);
router.post("/del", demoController.deleteData);
router.post("/:id", demoController.getParams);

export default router;
