var router = require('express').Router();
var Product = require('../services/products')
// api/products
router.get('/', async function (req, res) {
    var { length, data } = await Product.get_all()
    res.setHeader('X-Total-Count', length)
    res.json(data);
});

// api/products/:id
router.get('/:id', function (req, res) {
    const id = req.params.id
    res.json(Product.get_one(id));
});

module.exports = router;