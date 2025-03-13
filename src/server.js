const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config()

const app = express()
const port = process.env.PORT
const connection = require('./config/database')

// A simple SELECT query
connection.query(
  'SELECT * FROM `users` ',
  function (err, results, fields) {
    // console.log(results); // results contains rows returned by server
  }
);
// config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config templete engine
configViewEngine(app)

// routes config
app.use('/', webRoutes)

app.listen(port, process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})