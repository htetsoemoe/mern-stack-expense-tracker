import React, { useMemo, useState } from 'react'
import bg from './img/bg.png'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Transaction from './components/Transaction/Transaction'
import Income from './components/Income/Income'
import Expense from './components/Expense/Expense'

const App = () => {
  const [active, setActive] = useState(1) // menuItems first id is 1.

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg}>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transactions' element={<Transaction />} />
            <Route path='/incomes' element={<Income />} />
            <Route path='/expenses' element={<Expense />} />
          </Routes>
        </main>
      </MainLayout>
    </AppStyled>
  )
}

// Created 'Styled-Component'
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`

export default App
