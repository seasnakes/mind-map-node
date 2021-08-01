const router = require('koa-router')()
const jwt = require('koa-jwt')
const user = require('../controller/user')
const { tokenSecret } = require('../configs')
const { checkOwner } = require('../controller/user')

const auth = jwt({ secret: tokenSecret })

router.prefix('/users')

router.post('/login', user.login)

router.post('/register', user.register)

router.post('/editProfile', auth, user.checkOwner, user.editProfile)

router.get('/getUser/:id', auth, checkOwner, user.getUser)

module.exports = router
