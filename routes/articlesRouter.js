import { Router } from "express";
import { addArticlePage, articlesPage, saveArticle } from "../controllers/articles.js";

const router = new Router()
router.get('/', articlesPage)
router.get('/addArticle', addArticlePage)
router.post('/addArticle', saveArticle)

export default router;