import React, { Component, createContext } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const GlobalData = createContext("hello");


export class TransactionDataProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            transactions:[],
            error: null,
            loading: true,
            name: "Varsha"
          }   
      
          this.deleteTransaction = this.deleteTransaction.bind(this);
          this.addTransaction = this.addTransaction.bind(this);
          this.getTransactions = this.getTransactions.bind(this);
      
        }
        
        async getTransactions(){
          try{
            const userEmail = sessionStorage.getItem("Email");
            console.log(userEmail);
            if(userEmail){
              console.log("I came here");
              const res = await axios.get(` http://localhost:5000/api/v1/transactions?email=${userEmail}`)
              console.log("I came here too");
              const data  = res.data.data;
              
              this.setState({
                ...this.state,
                loading: false,
                transactions: data
              })
            }
          
            else{
              this.setState(
                {
                  ...this.state,
                  error: "User not signed in"
                }
              )
              
              const history = useHistory();
              history.push('/signin');
            }
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

        console.log(obj);
         const config = {
           'Config-Type' : 'application/json'
         }
         try
        {
          const res = await axios.post('http://localhost:5000/api/v1/transactions', obj, config);
          // console.log(res);
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
      
    
    
    render() {
        const commonProps = {
            state: this.state,
            getTransactions:this.getTransactions,
            addTransaction: this.addTransaction,
            deleteTransaction: this.deleteTransaction,
            settedEmail: this.setEmail

        }
      
        return (
            <GlobalData.Provider value = {{...commonProps}}>
                {this.props.children}
                
            </GlobalData.Provider>
           
        )
    }
}

export default TransactionDataProvider
