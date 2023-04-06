const express = require("express");
const router = express.Router();

const {
  getOneDoctor,
  getAllDoctor,
  updateDoctor,
  deleteDoctor,
  createDoctor,
} = require("../controller/doctor");

router.get("/doctor", getAllDoctor);
router.get("/doctor/:id", getOneDoctor);

router.post("/doctor", createDoctor);
router.put("/doctor/:id", updateDoctor);
router.delete("/doctor/:id", deleteDoctor);

module.exports = router;
