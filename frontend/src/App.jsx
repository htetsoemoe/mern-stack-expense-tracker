import React, { useMemo, useState } from 'react'
import bg from './img/bg.png'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'

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
