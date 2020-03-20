'use strict';

const express = require('express')
const app = express()
const port = 3000
const pug = require('pug')

app.set('view engine', 'pug')
const compiledFunction = pug.compileFile('./views/index.pug');

app.use('/public', express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/catinfo', (req, res) => {
    const cat = {
      'name': 'Frank',
      'age': 6,
      'weight': 5,
    };
    res.json(cat);
  });