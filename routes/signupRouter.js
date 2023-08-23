import { Router } from "express";
import { signupPage } from "../controllers/login.js";

const router = Router();
router.get('/', signupPage)

export default router