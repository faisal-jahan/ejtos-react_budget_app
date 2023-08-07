import React from 'react';

const Currency = () =>{

    return(
        <div>
            <select className="alert alert-success text-light-hover w-full" name="currency" id="currency">
                <option value="dollar">$ Dollar</option>
                <option selected value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;