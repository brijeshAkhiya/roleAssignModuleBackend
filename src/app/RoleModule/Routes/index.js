const router = require('express').Router()
const controller = require('../Controller/index')

router.post('/createrole', controller.createRole)
router.post('/editrole', controller.editRole)
router.post('/deleterole', controller.deleteRole)
router.post('/addpermissions', controller.addpermissions)

router.get('/viewrole', controller.viewRoles)
router.get('/getpermissions', controller.getpermissions)
module.exports = router
