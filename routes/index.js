var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/main', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
//
// });

module.exports = router;