import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'

const Dashboard = () => {
    return (
        <DashboardStyled>
            <InnerLayout>
                This is a dashboard.
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`

export default Dashboard
