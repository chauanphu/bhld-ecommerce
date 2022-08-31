var router = require('express').Router();

// api/products
router.get('/', function (req, res) {
    res.json([]);
});

// api/products/:id
router.get('/:id', function (req, res) {
    res.json([]);
});

module.exports = router;