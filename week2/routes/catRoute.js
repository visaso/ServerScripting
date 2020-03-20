// Router
'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), function (req, res, next) {

    next()
  })

  router.post('/', catController.handle_form);





module.exports = router;



