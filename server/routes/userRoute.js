const Router = require('express')
const router = new Router()
const { userController } = require('../controllers')

router.get('/users', userController.getUsers)
router.get('/add', userController.addUser)

module.exports = router
