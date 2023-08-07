import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remainging from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                        <div className = 'col-sm'>
                            <Budget></Budget>
                        </div>
                        {/* Add Remaining component here under */}        
                        <div className = 'col-sm'>
                            <Remainging></Remainging>
                        </div>
                        {/* Add ExpenseTotal component here under */}        
                        <div className = 'col-sm'>
                            <ExpenseTotal></ExpenseTotal>
                        </div>
                       
                        {/* Add ExpenseList component here under */}
                        <div>
                            <h2>
                                Allocation
                            </h2>
                            <ExpenseList></ExpenseList>
                        </div>

                        {/* Add ExpenseItem component here under */}
                        <div>
                            <ExpenseItem></ExpenseItem>
                        </div>     

                        {/* Add AllocationForm component here under */}
                        <div>
                            <h2>Change Allocation</h2>
                            <AllocationForm></AllocationForm>    
                        </div>        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
