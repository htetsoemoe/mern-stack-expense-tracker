const express = require('express')
const router = express.Router()

const incomeController = require('../controllers/incomeController')
const expenseController = require('../controllers/expenseController')

// router.get('/', (req, res) => {
//     res.send("Hello World, APIs are working...")
// })

router.post('/add-income', incomeController.addIncome)
    .get('/all-incomes', incomeController.getAllIncomes)
    .delete('/delete-income/:id', incomeController.deleteIncome)
    .post('/add-expense', expenseController.addExpense)
    .get('/get-expenses', expenseController.getAllExpenses)
    .delete('/delete-expense/:id', expenseController.deleteExpense)

module.exports = router