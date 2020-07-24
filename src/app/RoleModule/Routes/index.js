const router = require('express').Router()
const controller = require('../Controller/index')

router.get('/viewrole', controller.viewRoles)
router.get('/getpermissions', controller.getpermissions)

router.post('/createrole', controller.createRole)

router.put('/editrole', controller.editRole)
router.put('/addpermissions', controller.addpermissions)

router.delete('/deleterole/:id', controller.deleteRole)

module.exports = router
