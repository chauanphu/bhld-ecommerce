const link = "http://localhost:4000/api/categories"

var category = {
    get_all: () => {
        return fetch(link)
    },
}

export default category