import user from "../models/usersSchema.js"

export const loginPage = (req, res) => {
    res.render('login', { pageTitle: 'login', layout: false })
}

export const signupPage = (req, res) => {
    res.render('signup', { pageTitle: 'signUp', userMessage: '', emailMessage: '', layout: false })
}

export const createUser = async (req, res) => {
    const { firstName, lastName, username, password, email } = req.body;
    const existingUser = await user.findOne({ username })
    const existingEmail = await user.findOne({ email })

    if (existingUser) {
        return res.render('signup', { pageTitle: 'signUp', userMessage: "username is not available", emailMessage: '', layout: false })
    }
    if (existingEmail) {
        return res.render('signup', { pageTitle: 'signUp', userMessage: '', emailMessage: "email is not available", layout: false })
    }
    await user.create({ firstName, lastName, username, password, email })
        .then(() => { res.redirect('/login'); })
        .catch((err) => { console.log(err); })
}