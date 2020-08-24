import React from 'react';
import './App.css';
import Header from './components/Header.js'
import  Balance from './components/Balance.js'
import  IncomeExpenses from './components/IncomeExpenses.js'
import { TransactionList } from './components/TransactionList'
import AddTransaction from './components/AddTransaction';
import GlobalDataProvider from './context/TransactionData';



function App(props){
  
    return (
      <div>
        <GlobalDataProvider>
        <Header/>
        <div className = "container">
          <Balance />
          <IncomeExpenses/>
          <TransactionList />
          <AddTransaction />
        </div>
        </GlobalDataProvider>
      </div>
    );
  }
 

export default App;
