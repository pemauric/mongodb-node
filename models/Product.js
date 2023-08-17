const conn = require('../db/conn');

const { ObjectId } = require('mongodb');

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    save(){
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            description: this.description,
            price: this.price
        })

        return product
    }

    static getProducts(){
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    static async getProductById(id) {
        const product = await conn.db().collection('products').findOne({_id : ObjectId(id)})

        return product
    }

}

module.exports = Product