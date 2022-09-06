var router = require('express').Router();
var Product = require('../services/products')
// api/products
router.get('/', function (req, res) {
    res.json(Product.get_all());
});

// api/products/:id
router.get('/:id', function (req, res) {
    res.json({ id: req.params.id });
});

module.exports = router;