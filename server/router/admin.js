const express = require("express");
const router = express.Router();

const {
  register,
  getOneAdmin,
  login,
  adminProfile,
  getAllAdmin,
  isAuthenticate,
  deleteAdmin,
  updateAdmin,
  updateNotify,
} = require("../controller/admin");

router.get("/admin", getAllAdmin);
router.get("/admin/:id", getOneAdmin);

router.post("/admin-register", register);

router.post("/admin-login", login);

router.put("/update-admin/:id", updateAdmin);

router.delete("/delete-admin/:id", deleteAdmin);

router.get("/adminProfile", isAuthenticate, adminProfile);

module.exports = router;
