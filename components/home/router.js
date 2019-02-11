var router = require('express').Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, 'index'), { title: 'Express' });
});

module.exports = router;