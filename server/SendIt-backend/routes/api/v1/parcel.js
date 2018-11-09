var express = require('express');
var router = express.Router();

/* GET list of all parcels */
router.get('/api/v1/parcels', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;