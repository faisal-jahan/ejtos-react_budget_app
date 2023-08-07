import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses,budget,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const update = (e) =>{
        let newValue = parseInt(e.target.value);
        
        if(newValue>20000){
            alert(`Value cannot exceed Remaining Value £20,000`)
        }
        else if(newValue < totalExpenses){
            alert(`Value cannot be less than Total Expenses`)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <form>
            <span>Budget: {currency}<input type='number' defaultValue={budget} onBlur={update} max='20000' step='10'></input></span>
            </form>
        </div>
    );
};
export default Budget;
