const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Permission = new Schema({
  saAdmin: [String],
  saContent: [String]
})
const permission = mongoose.model('permission', Permission)
module.exports = permission
