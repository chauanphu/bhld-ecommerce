const link = "http://localhost:4000/api/products"

var Product = {
    /**
     * Get all products
     * @param {number} page 
     * @returns {Promise<{total_count: number, data: Promise<Array>}>} data
     */
    get_all: (page) => {
        return fetch(link + '?_page=' + page + '&_limit=12')
            .then(res => {
                return {
                    total_count: res.headers.get('X-Total-Count'),
                    data: res.json()
                }
            })
    },

    get_by_category: (category_id) => {
        console.log('category_id', category_id)
        return fetch(link + '?category=' + category_id)
            .then(res => {
                return {
                    total_count: res.headers.get('X-Total-Count'),
                    data: res.json()
                }
            })
    },

    /**
     * Return detailed data of a product
     * @param {string} id Id to be searched
     */
    get_by_id: (id) => {
        return fetch(link + '/' + id).then(res => { return res.json() })
    }
}

export default Product