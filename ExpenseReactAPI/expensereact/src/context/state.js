import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
const Istate = {
    transactions: [],
    errors: null,
    loading:true
}

// create context
export const GlobalContext = createContext(Istate)
// provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, Istate)

    // Action 
    const Loading = () => {
        return {
            type:'SET_LOADING'
        }
    }

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transaction')
             
            dispatch({
                type: "GET_TRANSACTION",
                payload:res.data.data
            })
             
          // console.log(res.data) 
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload:err.response.data.error
            })
        }
    }

    const delet = async id => {

        try {
            await axios.delete(`/api/v1/transaction/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload:id
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload:err.response.data.error
            })
        }
         
    }
    const add = async tran => {
        const config={
            headers:{
              'Content-Type':'application/json'
            }
        }
        try {
            const res=await axios.post('/api/v1/transaction', tran, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload:res.data.data
            })  
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload:err.response.data.error
            })
        }
       
     }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        delet,
        add,
        getTransactions,
        errors: state.erros,
        loading: state.loading,
        Loading
    }}>
    
    {children}
    </GlobalContext.Provider>)
}