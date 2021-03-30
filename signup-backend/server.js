const express = require('express')
const mongoose = require('mongoose')
const routesURLs = require('./routes/routes')
const cors = require('cors')
const dotenv = require('dotenv')
const port = 5000
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_CONNECTION, () => {
  console.log(process.env.MONGO_CONNECTION)
  console.log('Database Connected!')
})

app.use(express.json())
app.use(cors())
app.use('/api', routesURLs)
app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})