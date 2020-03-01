import React, { Fragment,useContext } from 'react'
import { GlobalContext } from '../context/state'
import { Transaction } from './Transaction'

export const TransList = () => {
  const {transactions} = useContext(GlobalContext)
   

   
    return (
        <Fragment>
        <h3>History</h3>
        <ul id="list">
          {transactions.map(tran => (
            <Transaction key={tran.id} tran={tran}/>
           ))}
         
        </ul> 
        </Fragment>
    )
}
