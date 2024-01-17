const fs = require('fs')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cnf = require('./config')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/static', express.static('static'))

const hbs = exphbs.create({  // Настройка Handlebars
    defaultLayout: 'main',   // Название файла с шаблоном
    extname: 'hbs'           // Расширение файла с шаблоном
})

app.engine('hbs', hbs.engine) // Регистрируем пакет hbs как движок для рендера страниц
app.set('view engine', 'hbs') // Включаем hbs в express
app.set('views', 'pages')  // Название папки со всеми файлами .hbs


app.get('/', (req, res) => {
    res.render('index', {title: 'main'})
    console.log('main')
})


app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(cnf.serverConf.port, () => (
    console.log('server start on', cnf.serverConf.port, 'port')
))