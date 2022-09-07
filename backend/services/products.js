const db = require('./firebase')

const Products = {
    _value_: [],
    /**
     * Return all categories
     * @returns 
     */
    async get_all() {
        if (this._value_.length == 0) {
            snapshot = await db.collection('products').get();
            snapshot.forEach(async (doc) => {
                ref = await doc.data().category.get();
                var item = {
                    id: doc.id,
                    ...doc.data()
                }
                item.category = ref.data().name
                this._value_.push(item)
            });
        }
        return {
            length: this._value_.length,
            data: [...this._value_]
        }
    },
    get_one: (id) => _value_.find(item => item.id === id),
    get_related: (id) => []
}
module.exports = Products