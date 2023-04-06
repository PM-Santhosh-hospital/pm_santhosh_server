const express = require("express");
const router = express.Router();

const {
  ContactEnquiry,
  getAllContact,
} = require("../controller/contactenquiry");

router.post("/contactenquiry", ContactEnquiry);
router.get("/contactenquiry", getAllContact);

module.exports = router;
