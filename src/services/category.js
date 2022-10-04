const link = process.env.REACT_APP_API + "/categories"

var category = {
    get_all: () => {
        return fetch(link)
    },
}

export default category 