const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config()

const app = express()
const port = process.env.PORT
const connection = require('./config/database');
const Kitten = require('./models/Kitten');


// config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config templete engine
configViewEngine(app)

// routes config
app.use('/', webRoutes);

const silence = new Kitten({ name: 'Test meow' });
silence.save().then(() => console.log('meow'));

(async () => {
  try {
    await connection()
    app.listen(port, process.env.HOST_NAME, () => {
      console.log(`Backend app listening on port ${port}`)
    })
  } catch (error) {
    console.log('>>> Error connnection to db', error);
  }
}
)()


