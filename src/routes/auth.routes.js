import { Router } from "express";
import {
  renderSigninForm,
  renderSignin
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.get("/auth/signin", renderSigninForm);

router.post("/auth/signin", renderSignin);
export default router;