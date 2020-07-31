import React from 'react'
import Transaction from './Transaction';


export const TransactionList = (props) => {

    const {transactions} = props;
    console.log(transactions);

    return (
        <>
            <h3>History</h3>
            <ul id = "list" className = "list" >
                { transactions.map(transaction =>(<Transaction transaction = {transaction} key = {transaction.id} deleteTransaction = {props.deleteTransaction} />))
                 }

            </ul>
        </>
    );
        
}
