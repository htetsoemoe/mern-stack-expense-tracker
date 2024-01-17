import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

const Transaction = () => {
  const { getAllTransactionHistory, getIncomes, getExpenses } = useGlobalContext()
  const [...sortedHistory] = getAllTransactionHistory()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <TransactionStyled>
      <InnerLayout>
        <h2 className='title'>Transactions</h2>
        {sortedHistory.map((item) => (
          <TransactionHistory 
            key={item._id}
            item={item}
          />
        ))}
      </InnerLayout>
    </TransactionStyled>
  )
}

const TransactionStyled = styled.div`
  display: flex;
    flex-direction: column;
    gap: 1rem;
    .title{
      margin-bottom: 1.5rem;
    }
`

export default Transaction
