import axios from "axios"

const link = process.env.REACT_APP_API + "/products"
var Product = {
    /**
     * Get all products
     * @param {number} page 
     * @returns {Promise<{total_count: number, data: Promise<Array>}>} data
     */
    get_all: (page) => {
        return axios.get(link, {
            params: {
                _page: page,
                _limit: 12
            }
        })
            .then(({ headers, data }) => {
                return {
                    total_count: headers['X-Total-Count'],
                    data: data
                }
            })
    },

    get_by_category: (category_path) => {
        let data = { category_path: category_path }
        return axios.get(link, {
            params: data
        })
            .then(({ headers, data }) => {
                return {
                    total_count: headers['X-Total-Count'],
                    data: data
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