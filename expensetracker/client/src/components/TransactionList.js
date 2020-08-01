import React, {useEffect} from 'react'
import Transaction from './Transaction';


export const TransactionList = (props) => {

    const {transactions, getTransactions} = props;

    useEffect(()=>{
        getTransactions();

    }, []);
    
    
   // console.log(transactions);

    return (
        <>
            <h3>History</h3>
            <ul id = "list" className = "list" >
                <Transaction transactions = {transactions} deleteTransaction = {props.deleteTransaction} />
                 

            </ul>
        </>
    );
        
}
