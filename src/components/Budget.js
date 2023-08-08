import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses,budget,currency,dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const updateBudget = (e) =>{
        let newValue = parseInt(e.target.value);

        dispatch({
            type:'SET_BUDGET',
            payload:newValue,
        });
        
        if(newValue>20000){
            alert(`Value cannot exceed Remaining Value £20,000`)
        }
        else if(newValue < totalExpenses){
            alert(`Value cannot be less than Total Expenses`)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type='number' onChange={updateBudget} defaultValue={budget} max='20000' step='10'></input></span>
        </div>
    );
};
export default Budget;
