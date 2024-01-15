import React, { useState } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import Button from '../Buttons/Button';
import { plus } from '../../utils/icons'

const ExpenseForm = () => {
    const { addExpense, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: "",
    })

    const { title, amount, date, category, description } = inputState

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError("")
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: "",
            amount: "",
            date: "",
            category: "",
            description: "",
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="custom-flex">
                <div className="input-control">
                    <input
                        type="text"
                        value={title}
                        name={'title'}
                        placeholder='Expense Title'
                        onChange={handleInput('title')}
                        required
                    />
                </div>
                <div className="input-control">
                    <input
                        type="text"
                        value={amount}
                        name={'amount'}
                        placeholder='Expense Amount'
                        onChange={handleInput('amount')}
                        required
                    />
                </div>
                <div className="">
                    <DatePicker
                        id="date"
                        placeholderText="Enter A Date"
                        selected={date}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                            setInputState({ ...inputState, date: date })
                        }}
                        required
                    />
                </div>
                <div className="selects">
                    <select
                        required
                        value={category}
                        onChange={handleInput('category')}
                        name="category" id="category"
                    >
                        <option value="" disabled >Select Option</option>
                        <option value="education">Education</option>
                        <option value="groceries">Groceries</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="takeaways">Takeaways</option>
                        <option value="clothing">Clothing</option>
                        <option value="traveling">Traveling</option>
                        <option value="other">Other</option>  
                    </select>
                </div>
            </div>
            <div className="custom-flex-textarea-btn">
                <div className="input-control">
                    <textarea
                        name="description"
                        value={description}
                        placeholder='Write A Description'
                        id="description"
                        cols="42" rows="4"
                        onChange={handleInput('description')}
                        required
                    >
                    </textarea>
                </div>
                <div className="submit-btn">
                    <Button
                        name={'Add Expense'}
                        icon={plus}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-accent'}
                        color={'#fff'}
                    />
                </div>
            </div>
        </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .custom-flex{
      display: flex;
      gap: 40px;
    }

    .custom-flex-textarea-btn{
      display: flex;
      gap: 40px;
      align-items: flex-end;
    }

    .selects{
        //display: flex;
        //justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default ExpenseForm
