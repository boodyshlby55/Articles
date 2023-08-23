import { Router } from "express";
import { loginPage } from "../controllers/login.js";

const router = Router()

router.get('/', loginPage)

export default router