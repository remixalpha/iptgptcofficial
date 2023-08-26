import express from "express";
var router = express.Router();

import * as adminController from "../controller/adminController";
import verify from "../controller/verifyToken";
// requests

router.post("/", verify, adminController.getUsers);
router.post("/create", adminController.createUser);
router.post("/login", adminController.login);
router.post("/dept", adminController.createDept);

export default router;
