import axios from "axios"

const link = process.env.REACT_APP_API + "/users"
const Users = {
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

    /**
     * Return detailed data of a product
     * @param {string} id Id to be searched
     */
    get_by_id: (normed_name) => {
        const url = `${link}/${normed_name}?type=shop`
        console.log('URL', url)
        return fetch(url).then(res => { return res.json() })
    },

    authenticate: (username, password) => {
        return axios.post(link, {
            username: username,
            password: password
        })
    }
}

export default Users