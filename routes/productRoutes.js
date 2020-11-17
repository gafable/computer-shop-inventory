const express = require('express')
const router = express.Router();

const productController = require('./../http/controllers/ProductController')

router.post('/store', productController.store)
router.post('/update/:id', productController.update)
router.post('/delete/:id', productController.destroy)

module.exports = router