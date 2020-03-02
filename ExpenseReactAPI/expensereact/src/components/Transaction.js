import React,{useContext} from 'react'
import { GlobalContext } from '../context/state'


export const Transaction = ({ tran: { text, amount,id } }) => { 
const {  delet } = useContext(GlobalContext)
    const sign=amount>0 ? "+":"-"
    return ( 
    <li className={`${amount}` < 0 ? "minus" : "plus"}>
 {text} <span>{sign}${Math.abs(amount)}</span> <button className="delete-btn" onClick={()=> delet(id)}>x</button>
    </li>
 )
}
