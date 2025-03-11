const express = require('express')
var path = require('path');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// config templete engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample')
  })

app.listen(port, process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})