const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.get('/', (req, res) => {
  res.send('<html><body>Hello World!</body></html>')
})

app.listen(port, IP, () => {
  console.log(`Example app listening on port ${port}`)
})