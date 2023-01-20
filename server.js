// command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 8000

const characterRoutes = require('./routes/character-routes')
const requestLogger = require('./lib/request-logger')
const characterSeed = require('./lib/character-seed')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())

app.use(requestLogger)

app.use(characterRoutes)

app.use('/seed', characterSeed)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app