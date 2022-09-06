var router = require('express').Router();
var Product = require('../services/products')
// api/products
router.get('/', function (req, res) {
    res.json(Product.get_all());
});

// api/products/:id
router.get('/:id', function (req, res) {
    const id = req.params.id
    res.json(Product.get_one(id));
});

module.exports = router;