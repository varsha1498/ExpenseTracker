import React from 'react';
import './App.css';
import {Header} from './components/Header.js'
import  Balance from './components/Balance.js'
import  IncomeExpenses from './components/IncomeExpenses.js'
import { TransactionList } from './components/TransactionList'
import AddTransaction from './components/AddTransaction';
import axios from 'axios'
import NavBar from './components/NavBar';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      transactions:[],
      error: null,
      loading: true

    }  

    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }



  async getTransactions(){
    try{
      console.log("hi");
      const res = await axios.get(' http://localhost:5000/api/v1/transactions');
     
      const data  = res.data.data;
      
      this.setState({
        ...this.state,
        loading: false,
        transactions: data
      })
    }
    catch(err){
      const error = err.response.data.error;
      this.setState({
        ...this.state,
        error: error
      })
    }
  }

  async deleteTransaction(id){
    try
    {
      console.log(`http://localhost:5000/api/v1/transactions/${id}`);
      const res = await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`);
      console.log(res);
      const newTrans = this.state.transactions.filter(transaction => transaction._id !== id);
      console.log(newTrans)
      this.setState({
      transactions: this.state.transactions.filter(transaction => transaction._id !== id)
    });
  }
  catch(err){
    const error = err.response.data.error;
      this.setState({
        ...this.state,
        error: error
      })
    }
  }


  

 async addTransaction(obj){
   const config = {
     'Config-Type' : 'application/json'
   }
   try
  {
    const res = await axios.post('http://localhost:5000/api/v1/transactions', obj, config);
    console.log(res);
    const newObj = res.data.data;
    this.setState({
      transactions:
        [...this.state.transactions, newObj]
      
    })

    }
    catch(err){
      const error = err.response.data.error;
      this.setState({
        ...this.state,
        error: error
      })
    
    }
  }

  render(){
    return (
      <div>
         <NavBar />
        <Header />
        <div className = "container">
         
          <Balance transactions = {this.state.transactions} />
          <IncomeExpenses transactions = {this.state.transactions}/>
          <TransactionList getTransactions = {this.getTransactions} transactions = {this.state.transactions} deleteTransaction = {this.deleteTransaction} />
          <AddTransaction  addTransaction = {this.addTransaction}/>
        </div>
      </div>
    );
  }
 
}

export default App;
