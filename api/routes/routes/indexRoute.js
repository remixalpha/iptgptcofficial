import express from "express";
var router = express.Router();
import * as indexRoute from "../controller/indexController";

router.get("/", indexRoute.indexController);
router.get("/test", indexRoute.testController);
export default router;
