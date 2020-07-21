const Roles = require('../Models/Roles')
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
