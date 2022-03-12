const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('<html><body>Hello World!</body></html>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})