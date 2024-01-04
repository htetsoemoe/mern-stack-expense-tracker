const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConfig')
require('dotenv').config()

const PORT = process.env.PORT || 3500

connectDB()

app.use(express.json())
app.use(cors(corsOptions))

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
