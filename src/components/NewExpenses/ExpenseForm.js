import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    // const [userInput,setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //     // setUserInput({
    //     //     ...userInput, // we are doing this because when updating only the title the (amount and date) will be lost.
    //     //     enteredTitle: event.target.value
    //     // })
    //     setUserInput(() => {
    //         return{
    //         ...userInput,
    //         enteredTitle: event.target.value};
    //     });
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput((userInput) => {
    //         return{
    //         ...userInput,
    //         enteredAmount: event.target.value};
    //     });
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput((userInput) => {
    //         return{
    //         ...userInput,
    //         enteredDate: event.target.value};
    //     });
    // }
    const submitHandler = (event) => {
        event.preventDefault();// this is the JS method which will not relaod the page for every submission when we click in the ADD EXPENSE button.
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };  // this will store the new title amount and date which is to be used anywhere in the component(parent or child).
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };
    
    return(
     <form onSubmit={submitHandler}>
         <div className='new-expense__controls'>
             <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value = {enteredTitle} onChange={titleChangeHandler}/>
             </div>
             <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value = {enteredAmount} onChange={amountChangeHandler} />
             </div>
             <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2021-12-31' value = {enteredDate} onChange={dateChangeHandler}/>
             </div>
             </div>
         <div className='new-expense__actions'>
             <button type="submit">Add Expense</button>
             <button onClick={props.OnCancel}>Cancel</button>
         </div>    
     </form>
    );
};

export default ExpenseForm;