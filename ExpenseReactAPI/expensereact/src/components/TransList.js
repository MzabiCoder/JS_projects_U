import React, { Fragment,useContext,useEffect } from 'react'
import { GlobalContext } from '../context/state'
import { Transaction } from './Transaction'

export const TransList = () => {
  const {transactions,getTransactions,loading} = useContext(GlobalContext)
   
  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line 
},[])
   
    return (
        <Fragment>
        <h3>History</h3>
        <ul id="list">
          {transactions.map(tran => (
            <Transaction key={tran.id} tran={tran}/>
           )) }
         
        </ul> 
        </Fragment>
    )
}
