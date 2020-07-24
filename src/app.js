const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./app/Router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(__dirname + '/index.html')
})
app.use('/', routes)
app.listen(process.env.PORT || process.env.NODE_ENV, () => {
  console.log('Listening on port ' + process.env.NODE_ENV)
})
