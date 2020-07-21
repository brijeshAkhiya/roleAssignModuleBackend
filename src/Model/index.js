const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Permission = new Schema({
  Admin: [String],
  Content: [String]
})
const permission = mongoose.model('permission', Permission)
module.exports = permission
