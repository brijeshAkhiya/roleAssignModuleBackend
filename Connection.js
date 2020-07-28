require('./env')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected') })
  .catch((error) => { console.log('There is a problem!!' + error) })
