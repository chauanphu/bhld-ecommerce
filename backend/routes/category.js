var router = require('express').Router();

var Category = require('../services/categories')
var Product = require('../services/products')

// api/products
router.get('/', function (req, res) {
    res.json(Category.get_all())
});

module.exports = router;