
const Product  = require('../models/Product')

const db = require('../db/conn');

module.exports = class ProductController {
    
    static async showProducts (req, res){
        res.render('home')
    }

    static createProduct (req, res) {
        res.render('create')
    }
}