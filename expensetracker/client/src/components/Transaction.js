import React from 'react'

function Transaction(props) {
    const {transaction, deleteTransaction} = props;

    const sign = transaction.amount>0? "+": "-";
    return (
        <li className = {transaction.amount < 0?"minus": "plus"}>
                {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className = "delete-btn" 
                                                                                 onClick = {(e)=>deleteTransaction(transaction.id)}>x</button> </li>
    )
}

export default Transaction
