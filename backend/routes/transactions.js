const express = require('express')
const router = express.Router()

const incomeController = require('../controllers/incomeController')

// router.get('/', (req, res) => {
//     res.send("Hello World, APIs are working...")
// })

router.post('/add-income', incomeController.addIncome)
    .get('/all-incomes', incomeController.getAllIncomes)
    .delete('/delete-income/:id', incomeController.deleteIncome)

module.exports = router