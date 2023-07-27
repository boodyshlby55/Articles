import express from "express"
import dotenv from "dotenv"
import ejsLayout from "express-ejs-layouts";
import mongoose from "mongoose";

import homeRouter from "./routes/homeRouter.js"
import articlesRouter from "./routes/articlesRouter.js"

dotenv.config();
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static('public'))
app.use(ejsLayout)
app.use(express.urlencoded({ extended: true }))

// mongoose connection
mongoose.connect(process.env.mongoConnection)
    .then((result) => {
        app.listen(process.env.port, () => {
            console.log(`Example app listening on port ${process.env.port}`)
        })
    }).catch((err) => {
        console.log(err);
    })

app.get('/', (req, res) => { res.redirect('/home') })
app.use('/home', homeRouter)
app.use('/articles', articlesRouter)
app.use((req, res) => { res.status(404).render('NotFound', { layout: false }) })