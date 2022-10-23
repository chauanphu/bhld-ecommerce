const link = process.env.REACT_APP_API + "/categories"

console.log('API: ', process.env)

var category = {
    get_all: () => {
        return fetch(link)
    },
}

export default category 