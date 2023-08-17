const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')

router.get('/:id', ProductController.getProduct)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.updateProductPost)
router.get('/', ProductController.showProducts)
router.post('/create', ProductController.createProductPost)
router.get('/create/form', ProductController.createProduct)


module.exports = router;