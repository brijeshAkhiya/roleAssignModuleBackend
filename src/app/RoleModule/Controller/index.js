const Roles = require('../Models/Roles')
const permission = require('../../../Model/index')
const controller = {}
controller.viewRoles = (req, res) => {
  Roles.find({})
    .then(result => res.send({ data: result }))
    .catch(error => {
      console.log(error)
      res.send({ message: 'Something Went Wrong!!' })
    })
}

controller.createRole = (req, res) => {
  Roles.create({ sRoleName: req.body.sRoleName, sPermimssions: req.body.sRoleName })
    .then(() => res.send({ message: 'Inserted' }))
    .catch(() => { res.send({ message: 'Something Went Wrong!!' }) })
}

controller.deleteRole = (req, res) => {
  Roles.deleteOne({ _id: req.body._id })
    .then(() => res.send({ message: 'Deleted' }))
    .catch(() => { res.send({ message: 'Something Went Wrong!!' }) })
}
controller.editRole = (req, res) => {
  Roles.updateOne({ _id: req.body._id }, {})
}

controller.addpermissions = (req, res) => {
  // This Code was just to create total permissions.
  // permmissions.create({ Admin: req.body.Admin, Content: req.body.Content })
  //   .then(result => {
  //     res.send(result)
  //   })
  //   .catch(error => {
  //     res.send(error)
  //   })

  // This Code is for adding new permissions
  permission.updateOne({ _id: '5f16ef87ece80761c616cc1e' }, { $push: { Admin: req.body.Admin, Content: req.body.Content } })
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

controller.getpermissions = (req, res) => {
  permission.find({})
    .then(result => {
      res.send({ data: result })
    })
    .catch(error => {
      console.log(error)
      res.send({ message: 'Something Went Wrong!!' })
    })
}
module.exports = controller
