import Article from "../models/articlesSchema.js"

export const articlesPage = async (req, res) => {
    await Article.find()
        .then((result) => { res.render('articles', { pageTitle: "Articles", headerTitle: "All Articles", display: "d-none", user: req.user, articles: result }) })
        .catch((err) => { console.log(err); })
}

export const articlePage = async (req, res) => {
    await Article.findById(req.params._id)
        .then((result) => { res.render('article', { pageTitle: `${result.title} Article`, headerTitle: `${result.title}`, display: "d-inline-block", user: req.user, article: result }) })
}

export const addArticlePage = async (req, res) => {
    res.render('addArticle', { pageTitle: "Add Article", headerTitle: "Add Article", user: req.user, display: "d-none" })
}

export const updateArticlePage = async (req, res) => {
    await Article.findById(req.params._id)
        .then((result) => { res.render('updateArticle', { pageTitle: `Update ${result.title}`, headerTitle: `Update "${result.title}"`, display: "d-none", user: req.user, article: result }) })
}

export const saveArticle = async (req, res) => {
    const article = new Article(req.body)
    await article.save()
        .then(() => { res.redirect('/articles') })
        .catch((err) => { console.log(err); })
    //     const { title, details } = req.body;
    //     await Article.create({
    //         title, details
    //     })
    //     res.redirect('/articles')
}

export const deleteArticle = async (req, res) => {
    await Article.findByIdAndDelete(req.params._id)
        .then((params) => { res.json({ articlesLink: "/articles" }) })
        .catch((err) => { console.log(err); })
}

export const updateArticle = async (req, res) => {
    const { title, details } = req.body
    await Article.findByIdAndUpdate(req.params._id, { $set: { title, details } })
        .then(() => { res.redirect(`/articles/${req.params._id}`) })
        .catch((err) => { console.log(err); })
}