const express = require("express");
const router = express.Router();

const {
  getOnemobileBanner,
  getAllmobileBanner,
  updatemobileBanner,
  deletemobileBanner,
  createmobileBanner,
} = require("../controller/mobilebanner");

router.get("/mobile-Banner", getAllmobileBanner);
router.get("/mobile-Banner/:id", getOnemobileBanner);
router.post("/mobile-Banner", createmobileBanner);
router.put("/mobile-Banner/:id", updatemobileBanner);
router.delete("/mobile-Banner/:id", deletemobileBanner);

module.exports = router;
