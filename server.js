const express = require('express')
const {search} = require('./src/bot')

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Live at PORT:${PORT}`)
  search()
})
