const Roles = require('../Models/Roles')
const permission = require('../../../Model/index')
const controller = {}
controller.viewRoles = (req, res) => {
  Roles.find({})
    .then(result => res.send({ data: result }))
    .catch(error => {
      console.log(error)
      res.send({ error: 'Something Went Wrong!!' })
    })
}

controller.createRole = (req, res) => {
  Roles.find({ sRoleName: req.body.sRoleName })
    .then(result => {
      if (result.length === 0) {
        Roles.create({ sRoleName: req.body.sRoleName, sParent: req.body.sParent, sPermissions: JSON.parse(req.body.sPermissions) })
          .then(() => res.send({ message: 'Inserted', responseCode: 10001 }))
          .catch((error) => {
            console.log(error)
            res.send({ error: 'Something Went Wrong!!', responseCode: 10005 })
          })
      } else {
        res.send({ message: 'Name already exists', responseCode: 10003 })
      }
    })
    .catch(error => {
      console.log(error)
      res.send({ error: 'Something Went Wrong!!' })
    })
}

controller.deleteRole = (req, res) => {
  Roles.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount) {
        console.log(result)
        res.send({ message: 'Deleted', status: result.deletedCount })
      } else {
        console.log(result)
        res.send({ message: 'Please try again!!', status: result.deletedCount })
      }
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: 'Something Went Wrong!!' })
    })
}
controller.editRole = (req, res) => {
  Roles.updateOne({ _id: req.body.id }, { sRoleName: req.body.sRoleName, sParent: req.body.sParent, sPermissions: JSON.parse(req.body.sPermissions) })
    .then((result) => {
      if (result.nModified) {
        res.send({ message: 'Updated', status: result.nModified })
      } else {
        res.send({ message: 'Please try again!!', status: result.nModified })
      }
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: 'Something Went Wrong!!' })
    })
}

controller.addpermissions = (req, res) => {
  // This Code was just to create total permissions.
  // permission.create({ saAdmin: req.body.Admin, saContent: req.body.Content })
  //   .then(result => {
  //     res.send(result)
  //   })
  //   .catch(error => {
  //     res.send(error)
  //   })

  // This Code is for adding new permissions
  permission.updateOne({ _id: '5f17e172ac0f046727804e17' }, { $push: { Admin: req.body.Admin, Content: req.body.Content } })
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

controller.getpermissions = (req, res) => {
  permission.findOne({})
    .then(result => {
      res.send({ data: result })
    })
    .catch(error => {
      console.log(error)
      res.send({ error: 'Something Went Wrong!!' })
    })
}
module.exports = controller
