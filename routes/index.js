var express = require('express');
var router = express.Router();
var path = require('path');
var database = require('../models/database');


router.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function (req, res) {
  res.send('Ecomm API is running');
});



module.exports = router;
