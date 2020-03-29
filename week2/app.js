'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const db = require('./utils/db')
var catRouter = require('./routes/catRoute')
var userRouter = require('./routes/userRoute')
const cors = require('cors')
const bodyParser = require('body-parser')

const passport = require('./utils/pass.js')
const authRoute = require('./routes/authRoute')

const mongoose = require('mongoose');
const cat = require('./models/cat');

// add following after app.use(session...



app.use(cors())
app.use('/public', express.static('week2_public_html'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', authRoute);
app.use('/cats', passport.authenticate('jwt', {session: false}), catRouter);
app.use('/users', passport.authenticate('jwt', {session: false}), userRouter);


app.post('/test', async (req, res) => {
    const myCat = await cat.create({ name: 'Thomas', age: 12 })
    res.json(myCat.id);
})

app.get('/test/:name', (req, res) => {
    cat.find({name: req.params.name}, function(err, data){
        if(err) console.log(err)
        res.json(data);
    });
})

app.get('/', (req, res) => {
  
});


db.on('connected', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});


