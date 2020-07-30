import React from 'react';
import './App.css';
import {Header} from './components/Header.js'
import  Balance from './components/Balance.js'
import  IncomeExpenses from './components/IncomeExpenses.js'
import { TransactionList } from './components/TransactionList'
import AddTransaction from './components/AddTransaction';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      transactions: [

    ] 

    }  

    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
  }

  deleteTransaction(id){
    this.setState({
      transactions: [
        this.state.transactions.filter(transaction => transaction.id !==id)
      ]
    });
  }

  addTransaction(obj){
    this.setState({
      transactions:
        [obj,...this.state.transactions]
      
    })
  }

  render(){
    return (
      <div>
        <Header />
        <div className = "container">
          <Balance transactions = {this.state.transactions} />
          <IncomeExpenses transactions = {this.state.transactions}/>
          <TransactionList transactions = {this.state.transactions} deleteTransaction = {this.deleteTransaction} />
          <AddTransaction  addTransaction = {this.addTransaction}/>
        </div>
      </div>
    );
  }
 
}

export default App;
