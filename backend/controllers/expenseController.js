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

}

// @desc delete specified expense with id
// @route DELETE 
// @access public
const deleteExpense = async (req, res) => {

}

module.exports = {
    addExpense,
    getAllExpenses,
    deleteExpense
}