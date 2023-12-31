const Income = require('../models/Income')

// @desc add new income
// @route POST /add-income
// @access public
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
        res.status(201).json({ message: 'Income Added' })
    } else {
        res.status(400).json({ message: 'Invalid income data received!' })
    }
}

// @desc get all incomes
// @route GET /all-incomes
// @access public
const getAllIncomes = async (req, res) => {
    const incomes = await Income.find().sort({ createdAt: -1 }) // sorting with descending

    if (!incomes.length) {
        return res.status(400).json({ message: 'No income found!' })
    }

    res.json(incomes)
}

// @desc delete specified income with id
// @route DELETE /delete-income/:id
// @access public
const deleteIncome = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID required!' })
    }

    const income = await Income.findById(id).exec()

    if (!income) {
        return res.status(400).json({ message: 'User not found!' })
    }

    await income.deleteOne()
    const deleteSuccessMsg = 'User has been deleted'
    res.json({ message: deleteSuccessMsg })
}

module.exports = {
    addIncome,
    getAllIncomes,
    deleteIncome,
}