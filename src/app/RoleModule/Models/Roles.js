const mongoose = require('mongoose')
const Schema = mongoose.Schema
const roles = new Schema({
  sRoleName: {
    type: String,
    required: true
  },
  sPermimssions: {
    type: [String],
    required: true
  }
})
const Roles = mongoose.model('Roles', roles)
module.exports = Roles
