import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import uuid from 'uuid'
const Istate = {
    transactions:[]
}

// create context
export const GlobalContext = createContext(Istate)
// provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, Istate)

    // Action 

   const delet=id => {
       dispatch({
           type: 'DELETE_TRANSACTION',
           payload:id
       })  
    }
    const add=tran => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:tran
        })  
     }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        delet,
        add
    }}>
    
    {children}
    </GlobalContext.Provider>)
}