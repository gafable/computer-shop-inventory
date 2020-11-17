const express = require('express')
const router = express.Router();

const pagesController = require('./../http/controllers/PageController')

router.get('/dashboard', pagesController.dashboard)
router.get('/products/create', pagesController.createProdut)
router.get('/products/update/:id', pagesController.updateProduct)

module.exports = router