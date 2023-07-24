const express = require('express')
const dotenv = require('dotenv')
const ejsLayout = require('express-ejs-layouts')

dotenv.config();
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static('public'))
app.use(ejsLayout)

// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


app.get('/', (req, res) => {
    res.redirect('/Home')
})

app.get('/Home', (req, res) => {
    res.render('index')
})

app.use((req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
})