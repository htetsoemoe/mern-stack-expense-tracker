import React from 'react'
import bg from './img/bg.png'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'

const App = () => {
  return (
    <AppStyled bg={bg}>
      <MainLayout>
        <h1>Hello World</h1>
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
