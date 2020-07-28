import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State
const initialState = {
    transactions: [
        { id: 1, text: "Flowers" , amount: -20},
        { id: 2, text: "Salary" , amount: 300},
        { id: 3, text: "CAmera" , amount: -10},
        { id: 4, text: "Shoes" , amount: 150},

    ]
}


//Create context
export const GlobalContext = createContext(initialState);


//Provider Component to let other things access our global context

export GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        
            <GlobalContext.Provider value = {
               { transactions: state.transactions}
            }>
            {children}
            </GlobalContext.Provider>
        
    );
}
