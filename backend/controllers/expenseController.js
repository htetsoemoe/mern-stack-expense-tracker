const Expense = require('../models/Expense')

// @desc add new expense
// @route POST /add-expense
// @access public
const addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    // Validations
    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All Fields are required!' })
    }
    if (amount <= 0 || !amount === 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number!' })
    }

    const newExpense = {
        title, amount, category, description, date
    }

    // Save expense to MongoDB
    const expense = await Expense.create(newExpense)

    if (expense) {
        res.status(201).json({ message: 'Expense Added' })
    } else {
        res.status(400).json({ message: 'Invalid expense date received!' })
    }
}

// @desc get all expenses
// @route GET
// @access public
const getAllExpenses = async (req, res) => {
    const expenses = await Expense.find().sort({ createdAt: -1 }) // sorting with descending order

    if (!expenses.length) {
        return res.status(400).json({ message: 'No expense found!' })
    }

    res.json(expenses)
}

// @desc delete specified expense with id
// @route DELETE 
// @access public
const deleteExpense = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Expense ID required!' })
    }

    const expense = await Expense.findById(id).exec()

    if (!expense) {
        return res.status(400).json({ message: 'Expense not found!' })
    }

    await expense.deleteOne()
    const deleteSuccessMsg = 'Expense has been deleted'
    res.json({ message: deleteSuccessMsg })
}

module.exports = {
    addExpense,
    getAllExpenses,
    deleteExpense
}