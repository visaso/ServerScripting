// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
    const cat = cats.filter(c => c.id == req.params.id)
    res.json(cat);
    //console.log(req.params);
}
   
module.exports = {
  cat_list_get,
  cat_get
};