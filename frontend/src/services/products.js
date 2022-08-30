const link = "http://localhost:8000/products"
const link_related = "http://localhost:8000/related_products"

var Product = {
    get_all: () => {
        return fetch(link)
    },

    /**
     * Return related products
     * @returns {Promise}
     */
    get_related: () => {
        return fetch(link_related).then(res => { return res.json() })
    },
    /**
     * Return detailed data of a product
     * @param {string} id Id to be searched
     */
    get_by_id: (id) => {
        return fetch(link_related + '/' + id).then(res => { return res.json() })
    }
}

export default Product