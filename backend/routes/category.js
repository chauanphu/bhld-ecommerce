var router = require('express').Router();

var Category = require('../services/categories')
var Product = require('../services/products')

// api/products
router.get('/', function (req, res) {
    res.json(Category.get_all())
});

// api/products/:id
router.get('/:id', function (req, res) {
    res.json([]);
});

module.exports = router;