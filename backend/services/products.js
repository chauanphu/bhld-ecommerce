var _value_ = [
    {
        id: "1",
        name: "#Name1",
        img: "",
        category: "",
        price: "289,000"
    }
]

const Products = {
    /**
     * Return all categories
     * @returns 
     */
    get_all: () => [..._value_],
    get_one: (id) => _value_.find(item => item.id === id),
    get_related: (id) => []
}
module.exports = Products