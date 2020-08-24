import React, { useContext } from 'react'
import { GlobalData } from '../context/TransactionData';



const IncomeExpenses = () => {
    const data = useContext(GlobalData);
    const {transactions} = data.state;
    const amount = transactions.map((transaction)=> transaction.amount);
    const income = amount
                .filter((amount) => amount>=0)
                .reduce(((acc, item)=> acc+=item),0)
                .toFixed(2);
    const expense = amount
                .filter((amount) => amount<0)
                .reduce(((acc, item)=> acc+=item),0)
                .toFixed(2);
    return (
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
    <p className="money plus">${income}</p>   
            </div>

            <div>
            <h4>Expense</h4>
            <p  className="money minus">-${Math.abs(expense)}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpenses
