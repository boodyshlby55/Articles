import Article from "../models/articlesSchema.js"

export const addArticlePage = (req, res) => {
    res.render('addArticle', { pageTitle: "Add Article" })
}

export const saveArticle = (req, res) => {
    const article = new Article(req.body)
    article.save()
        .then(() => {
            res.redirect('/home')
        })
        .catch((err) => {
            console.log(err);
        })
    //     const { title, details } = req.body;
    //     await Article.create({
    //         title, details
    //     })
    //     res.redirect('/home')
}