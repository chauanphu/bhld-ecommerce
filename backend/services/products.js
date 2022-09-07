var _value_ = [
    {
        id: "1",
        name: "Nón bảo hộ nhựa (khóa vặn) N.001",
        code: "N.001",
        img: "",
        category: "NÓN BẢO HỘ LAO ĐỘNG",
        price: "26,000",
        materials: ['Nhựa'],
        colors: ['Trắng', 'Cam']
    },
    {
        id: "2",
        name: "Nón bảo hộ nhựa ( khóa cài) N.002",
        code: "N.002",
        img: "",
        category: "NÓN BẢO HỘ LAO ĐỘNG",
        price: "19,500",
        materials: ['Nhựa'],
        colors: ['Trắng', 'Cam']
    },
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