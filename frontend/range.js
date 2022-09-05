module.exports = (req, res, next) => {
    res.header('Content-Range', 'categories 0-20/20')
    next()
}