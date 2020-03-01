import React,{useContext} from 'react'
import { GlobalContext } from '../context/state'



export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts= transactions.map(tran => tran.amount)
    let total=amounts.reduce((a, b) => a += b,0)
        .toFixed(2)
   
    
    return (
        <div>
        <h4>Balance</h4>
            <h1 id="balance">{total}</h1>
        </div>
    )
}
