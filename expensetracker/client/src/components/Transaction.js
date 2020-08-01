import React from 'react'

function Transaction(props) {
    console.log(props)
    const {transactions, deleteTransaction} = props;

   
    const transactionLi = transactions.map(transaction => {
        const sign = transaction.amount>0? "+": "-";
        const classN = transaction.amount < 0?"minus": "plus";

        const handleClick = (id) => {
            console.log("i clicked")
            console.log(id)
        }
     return(
        <li key={transaction._id} className={classN}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
            <button className = "delete-btn" 
                    onClick = {() => deleteTransaction(transaction._id)}>
            x      
            </button>
        </li>
     )    
    });
    console.log(transactionLi)
    return (
        <>
        {transactionLi}
        </>
        // <li  
        //     // className = {transaction.amount < 0?"minus": "plus"}>
        //     //     
        //     //      
        //     //             
        //     //     x</button> 
        // </li>
    )
}

export default Transaction
