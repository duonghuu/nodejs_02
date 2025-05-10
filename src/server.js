const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
require('dotenv').config()
const { MongoClient } = require('mongodb');

const app = express()
const port = process.env.PORT
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

// default options
app.use(fileUpload());

// config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config templete engine
configViewEngine(app)

// routes config
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

(async () => {
  try {
    await connection();
    // Connection URL
    // const url = process.env.DB_HOST_WITH_DRIVER;
    // const client = new MongoClient(url);
    // const dbName = process.env.DB_NAME;

    // Use connect method to connect to the server
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('documents');

    app.listen(port, process.env.HOST_NAME, () => {
      console.log(`Backend app listening on port ${port}`)
    })
  } catch (error) {
    console.log('>>> Error connnection to db', error);
  }
}
)()


