const db = require('./firebase')

const Category = {
    _value_: [],

    async get_all() {
        if (this._value_.length == 0) {
            snapshot = await db.collection('categories').get();
            snapshot.forEach(async (doc) => {
                var item = {
                    id: doc.id,
                    ...doc.data()
                }
                // console.log(this.item)
                this._value_.push(item)
            });
        }
        return [...this._value_]
    }
}
module.exports = Category