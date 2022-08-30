const link = "http://localhost:8000/products"

var Product = {
    get_all: () => {
        return fetch(link)
    },
}

export default Product