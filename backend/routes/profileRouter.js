const express = require("express");
const router = express.Router();
const {
  CreateProfile,
  GetProfile,
} = require("../controller/profileController");

router.post("/createprofile", CreateProfile);
router.get("/getprofile/:id", GetProfile);

module.exports = router;
