const express = require('express')
const app = express()
const port = 5000
app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/Home')
})

app.get('/Home', (req, res) => {
    res.render('index')
})

app.use((req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})