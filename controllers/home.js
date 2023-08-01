import Articles from "../models/articlesSchema.js"

export const home = (req, res) => {
    Articles.find()
        .then((result) => { res.render('index', { pageTitle: "Home", display: "d-inline-block", articles: result }) })
        .catch((err) => { console.log(err); })
}