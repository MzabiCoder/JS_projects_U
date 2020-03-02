import React,{useContext} from 'react'
import { GlobalContext } from '../context/state'
import {numberWithCommas} from '../utils/function'


export const Transaction = ({ tran: { text, amount,_id } }) => { 
const {  delet } = useContext(GlobalContext)
    const sign=amount>0 ? "+":"-"
    return ( 
    <li className={`${amount}` < 0 ? "minus" : "plus"}>
 {text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span> <button className="delete-btn" onClick={()=> delet(_id)}>x</button>
    </li>
 )
}
