require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github', (req, res) => {
    res.send('<h1>Github</h1>')
  })
app.get('/twitter', (req, res) => {
    res.send("<h1>Twitter</h1>")
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
