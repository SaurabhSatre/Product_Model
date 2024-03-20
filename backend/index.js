const express = require('express')
const app = express()
const port=5000
const mongodb = require("./db")
const bodyParser = require('body-parser')
mongodb();
const routes = require('./routes/productRoutes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });