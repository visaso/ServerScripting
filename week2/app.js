'use strict';
const express = require('express');
const app = express();
const port = 5500;
var catRouter = require('./routes/catRoute')
var userRouter = require('./routes/userRoute')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/cats', catRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
