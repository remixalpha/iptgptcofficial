var express = require("express");
var router = express.Router();

import {
  demoRoute,
  indexRoute,
  adminRoute,
  notificationRoute,
  hodRoute,
  StaffRoute,
  GalleryRoute,
  AicteMandatesRoute,
  PricipalRoute,
  cocurricularRoute,
} from "./routes";
const url = "/api";

router.use(`${url}`, indexRoute);
router.use(`${url}/demo`, demoRoute);
// router.use(`${url}/elc`, electrocoagulationRoute);
router.use(`${url}/admin`, adminRoute);
router.use(`${url}/notification`, notificationRoute);
router.use(`${url}/hod`, hodRoute);
router.use(`${url}/staff`, StaffRoute);
router.use(`${url}/gallery`, GalleryRoute);
router.use(`${url}/aicte`, AicteMandatesRoute);
router.use(`${url}/cocu`, cocurricularRoute);
router.use(`${url}/principal`, PricipalRoute);

export default router;
