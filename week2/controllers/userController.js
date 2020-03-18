// Controller
'use strict';
const userModel = require('../models/userModel');
const bodyParser = require('body-parser')
const multer = require('multer')

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
    let user = users.find(c => c.id == req.params.id)
    delete user.password;
    res.json(user);
    //console.log(req.params);
}

const log_form = (req, res) => {
  console.log("Name is : ", req.body.name);
  console.log("Email is : ", req.body.email);
}
   
module.exports = {
  user_list_get,
  user_get,
  log_form
};