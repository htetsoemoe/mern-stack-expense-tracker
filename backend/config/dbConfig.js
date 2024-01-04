const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "mern-expense-tracker",
            maxPoolSize: 50,
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB