const express = require('express')
const router = express.Router();

const accountController = require('../controllers/accountController')

router.post('/create', accountController.createAccount)
router.post('/find', accountController.findAccount)
module.exports = router