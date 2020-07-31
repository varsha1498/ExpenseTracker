import React, { useState } from 'react'


const AddTransaction = (props) => {
    const [Text, setText] = useState("");
    const [Amount, setAmount] = useState(0);
    const[date, setDate] = useState("");

    const {addTransaction} = props; 

    const onSubmit = e =>{
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text: Text,
            amount: +Amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-control">
                    <label htmlFor = "Text">Text</label>
                    <input type = "text" placeholder = "Enter text...." value = {Text} onChange = {(e)=>setText(e.target.value)}/>
                </div>

                <div className = "form-control">
                    <label htmlFor = "Amount">Amount<br />
                    (negative - expense, positive - income)</label>

                <input type = "number" placeholder = "Enter amount..." value = {Amount} onChange = {(e)=>setAmount(e.target.value)}/>
               
                </div>

                <div className = "form-control">
                    <label htmlFor = "date" />Date<br />
                    <input type = "date" value = {date} onChange = {(e)=>setDate(e.target.value)}/>
                </div>
              
                <button className = "btn">Add Transaction</button>
            </form>

        </>
    )
}

export default AddTransaction
