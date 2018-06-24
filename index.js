//console.log('****************** Hello Prabesh *****************')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from index.js ********')
})

app.listen(3535, () => {
  console.log('Listenig on port 3535 ********************')
})