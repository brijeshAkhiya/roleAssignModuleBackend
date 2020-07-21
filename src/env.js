const environment = {}

environment.prod = {}

environment.dev = {
  DB_URL: 'mongodb+srv://brijesh_1116:mLab17@mycluster0-xnamd.mongodb.net/rollAssign?retryWrites=true&w=majority',
  PORT: 3000
}

process.env.NODE_ENV = environment.dev.PORT
process.env.DB_URL = environment.dev.DB_URL

module.exports = environment
