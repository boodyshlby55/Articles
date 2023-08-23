export const loginPage = (req, res) => {
    res.render('login', { pageTitle: 'login', layout: false })
}

export const signupPage = (req, res) => {
    res.render('signup', { pageTitle: 'signUp', layout: false })
}