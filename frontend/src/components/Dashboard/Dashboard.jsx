import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Chart from '../Chart/Chart'
import { useGlobalContext } from '../../context/globalContext'
import { dollar } from '../../utils/icons'
import History from '../History/History'

const Dashboard = () => {
    const { getIncomes, getExpenses, totalExpenses, totalIncome, totalBalance, incomes, expenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 className='title'>Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p className='income-info'>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p className='expense-info'>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p className='balance-info'>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max </h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(income => income.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(income => income.amount))}
                            </p>
                        </div>
                        <h2 className="expense-title">Min <span>Expense</span> Max</h2>
                        <div className="expense-item">
                            <p>
                                ${Math.min(...expenses.map(expense => expense.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(expense => expense.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .title{
        margin-bottom: 2rem;
    }
   .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 350px;
            
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;                   
                }

                .income-info{
                    color: var(--color-green);
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .expense-info{
                    color: var(--color-red);
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .balance-info{
                    color: var(--color-blue);
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .balance{
                    grid-column: span 2;
                    margin-bottom: 1.5rem;
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;

            h2{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-title{
                padding: 1rem;
                font-size: 1.2rem;
                margin-bottom: 0;
                span{
                    font-size: 1.8rem;
                }
            }
            
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    color: var(--color-green);
                    font-weight: bold;
                    font-size: 1.6rem;
                }
            }

            .expense-title{
                padding: 1rem;
                font-size: 1.2rem;
                margin-top: 0.5rem;
                span{
                    font-size: 1.8rem;
                }
            }

            .expense-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    color: var(--color-red);
                    font-weight: bold;
                    font-size: 1.6rem;
                }
            }
        }
    }
`

export default Dashboard
