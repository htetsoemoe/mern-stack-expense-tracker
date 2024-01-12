import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'

const Transaction = () => {
  return (
    <TransactionStyled>
      <InnerLayout>
        This is a transition.
      </InnerLayout>
    </TransactionStyled>
  )
}

const TransactionStyled = styled.div`

`

export default Transaction
