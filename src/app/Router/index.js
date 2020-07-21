const router = require('express').Router()
const RoleModule = require('../RoleModule/Routes')

router.use('/', RoleModule)
module.exports = router
