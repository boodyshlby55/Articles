import { Router } from "express";
import { addArticlePage, articlePage, articlesPage, deleteArticle, saveArticle, updateArticle, updateArticlePage } from "../controllers/articles.js";

const router = new Router()
router.get('/', articlesPage)

router.get('/addArticle', addArticlePage)
router.post('/addArticle', saveArticle)

router.get('/:_id', articlePage)
router.delete('/:_id', deleteArticle)
router.get('/:_id/updateArticle', updateArticlePage)
router.put('/:_id', updateArticle)
export default router;