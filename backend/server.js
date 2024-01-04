const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConfig')
const { readdirSync } = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 3500

connectDB()

// middlewares
app.use(express.json())
app.use(cors(corsOptions))

// router-level middleware
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
