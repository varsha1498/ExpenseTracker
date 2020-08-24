import React, {useEffect, useContext} from 'react'
import Transaction from './Transaction';
import { GlobalData } from '../context/TransactionData';


export const TransactionList = (props) => {
    const data = useContext(GlobalData);
    const {transactions} = data.state;
    const {getTransactions, deleteTransaction} = data;

    useEffect(()=>{
        
        getTransactions()
        
    }, []);
    
    
   // console.log(transactions);

    return (
        <>
            <h3>History</h3>
            <ul id = "list" className = "list" >
                <Transaction transactions = {transactions} deleteTransaction = {deleteTransaction} />
                 

            </ul>
        </>
    );
        
}
