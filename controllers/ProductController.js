
const Product  = require('../models/Product')

const db = require('../db/conn');

module.exports = class ProductController {
    
    static async showProducts (req, res){
        const products = await Product.getProducts();
        
        res.render('home', { products })
    }

    static createProduct (req, res) {
        res.render('create')
    }
    
    static createProductPost (req, res) {
        
        const name = req.body.name
        const description = req.body.description
        const price = req.body.price

        const product = new Product(name, description, price)

        product.save()

        res.redirect("/")
    }

    static async 
}