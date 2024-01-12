import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'

const Expense = () => {
  return (
    <ExpenseStyled>
      <InnerLayout>
        This is a expense.
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`

`

export default Expense
