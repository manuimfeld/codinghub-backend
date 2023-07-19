const express = require("express");
const router = express.Router();
import authController from "../controllers/auth";
import { checkJwt } from "../middlewares/session";

router.post("/login", authController.login);

router.post("/register", authController.register);

module.exports = router;
