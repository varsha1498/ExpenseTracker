import React, { useContext } from 'react'
import { GlobalData } from '../context/TransactionData';


const Balance = (props) => {

    const data = useContext(GlobalData);
    const {transactions} = data.state;
    const amount = transactions.map(transaction => transaction.amount);

    const total = amount.reduce(((acc, item)=> acc+=item ),0).toFixed(2);
    return (
        <>
          <h4>Balance</h4>
          <h1>${total}</h1>
        </>
    );
}

export default Balance
