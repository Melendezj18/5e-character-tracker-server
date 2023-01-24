// command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 8000

const characterRoutes = require('./routes/character-routes')
const requestLogger = require('./lib/request-logger')
const characterSeed = require('./lib/character-seed')
const userRoutes = require('./routes/user-routes')
const equipmentRoutes = require('./routes/equipment-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

// For Express to accept the content type of json we have to use `express.json()` middleware and pass it to `app.use`
app.use(express.json())
app.use(requestLogger)

// Pass the routes to `app.use` for Express to use them
app.use(characterRoutes)
app.use('/seed', characterSeed)
app.use(noteRoutes)
app.use(userRoutes)
app.use(equipmentRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app