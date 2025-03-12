const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// config templete engine
configViewEngine(app)

// routes config
app.use('/', webRoutes)

app.listen(port, process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})