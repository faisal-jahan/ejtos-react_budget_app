import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{

    const {dispatch} = useContext(AppContext);
    
    const handleCurrencyChange = (e) =>{
        const value = e.target.value
        dispatch({
            type:'CHG_CURRENCY',
            payload:value
        })
    }

    return(
        <div>
            <select style={{fontWeight:'bold'}} onChange={handleCurrencyChange} className="alert alert-success text-light-hover w-full" name="currency" id="currency">
                <option value="$">$ Dollar</option>
                <option selected value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;