const app = require('express')()
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(__dirname + './index.html')
})
app.listen(process.env.PORT || process.env.NODE_ENV, () => {
  console.log('Listening on port ' + process.env.NODE_ENV)
})
