const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/ValidateToken");

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userControllers");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.get("/profile", validateToken, currentUser);

module.exports = router;
