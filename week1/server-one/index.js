const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send(' World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/catinfo', (req, res) => {
    const cat = {
      'name': 'Frank',
      'age': 6,
      'weight': 5,
    };
    res.json(cat);
  });