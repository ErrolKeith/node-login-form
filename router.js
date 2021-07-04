const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

//login routes
router.get('/', userController.home)
router.post('/', userController.login)

module.exports = router