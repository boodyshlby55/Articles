import { Router } from "express";
import { addArticlePage, saveArticle } from "../controllers/articles.js";

const router = new Router()
router.get('/',)
router.get('/addArticle', addArticlePage)
router.post('/addArticle', saveArticle)

export default router;