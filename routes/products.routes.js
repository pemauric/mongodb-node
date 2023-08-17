const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')

//router.post('/remove', ProductController.deleteProductPost);
//router.post('/edit', ProductController.editProductPost);
router.get('/edit/:id', ProductController.editProduct);
router.get('/:id', ProductController.getProduct);
router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
router.get('/',ProductController.showProducts); 

module.exports = router;