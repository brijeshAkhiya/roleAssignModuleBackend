const router = require('express').Router()
const controller = require('../Controller/index')

router.post('/createrole', controller.createRole)
router.put('/editrole', controller.editRole)
router.delete('/deleterole/:id', controller.deleteRole)
router.post('/addpermissions', controller.addpermissions)

router.get('/viewrole', controller.viewRoles)
router.get('/getpermissions', controller.getpermissions)
module.exports = router
