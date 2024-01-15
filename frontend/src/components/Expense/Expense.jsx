import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Swal from 'sweetalert2'

const Expense = () => {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

  useEffect(() => {
    getExpenses()
  }, [])

  const deleteExpenseHandler = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        await deleteExpense(id)
      }
    });
  }

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">Total Expense: <span>{" "}${" "}{totalExpenses()}</span></h2>
        <div className="expense-content">
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, type, date, category, description } = expense
              console.log(expense)
              return <ExpenseItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteExpense={deleteExpenseHandler}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-expense{
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FCF6F9;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem 0;
      font-size: 2rem;
      gap: .5rem;
      span{
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-green);
      }
  }

  .expense-content{
    // display: flex;
    gap: 2rem;
    .expenses{
      flex: 1;
    }

    .form-container{
      margin-bottom: 3rem;
    }
  }
`

export default Expense
