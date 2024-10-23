import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  getLoggedInUserDetails,
} from "../controller/usercontroller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout",logoutUser);
router.get("/me", isLoggedIn, getLoggedInUserDetails);

export default router;
