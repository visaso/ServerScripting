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
  console.log('user id parameter', req.params);
  const user = users.filter(user => user.id === req.params.id).pop();
  res.json(user);
};

const log_form = (req, res) => {
  console.log("Name is : ", req.body.name);
  //console.log("Email is : ", req.body.email);
}

const user_post = (req, res) => {
  console.log('data from form', req.body);
  res.send('With this endpoint you can add users');
};
   
module.exports = {
  user_list_get,
  user_get,
  log_form,
  user_post
};
