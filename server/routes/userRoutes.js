const express = require('express')
const app = express();
const userController = require('../controller/userController')
const loginController = require('../controller/loginController')
const cors = require('cors')

const router = express.Router()

router.use(cors())

router.post('/register',userController.createUser)
router.post('/login',loginController.login)

module.exports = router;