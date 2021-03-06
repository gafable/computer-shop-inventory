const express = require('express')
const router = express.Router();

const authController = require('./../http/controllers/AuthController')

router.get('/register', authController.register)
router.get('/login', authController.login)

module.exports = router