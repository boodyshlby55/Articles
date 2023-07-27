export const home = (req, res) => {
    res.render('index', { pageTitle: "Home", display: "d-inline-block" })
}