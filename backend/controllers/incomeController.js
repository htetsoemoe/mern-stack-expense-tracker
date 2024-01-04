const Income = require('../models/Income')

const addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    //validations
    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' })
    }
    if (amount <= 0 || !amount === 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number!' })
    }

    const newIncome = {
        title, amount, category, description, date, amount
    }

    // Save Income to MongoDB
    const income = await Income.create(newIncome)

    if (income) {
        res.status(200).json({ message: 'Income Added' })
    } else {
        res.status(400).json({ message: 'Invalid income data received!' })
    }
}

module.exports = {
    addIncome,
}