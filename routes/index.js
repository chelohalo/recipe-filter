var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.send('<p>HTML Data</p>');
  console.log("req params: ",req.params.id)
  console.log("req query: ",req.query)

});

module.exports = router;
