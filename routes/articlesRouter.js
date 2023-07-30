import { Router } from "express";
import { addArticlePage, articlePage, articlesPage, deleteArticle, saveArticle } from "../controllers/articles.js";

const router = new Router()
router.get('/', articlesPage)
router.get('/addArticle', addArticlePage)
router.post('/addArticle', saveArticle)
router.get('/:_id', articlePage)
router.delete('/:_id', deleteArticle)
export default router;