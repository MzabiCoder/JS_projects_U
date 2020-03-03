import React, { Fragment, useState,useContext } from 'react'
import { GlobalContext } from '../context/state'



export const AddTrans = () => {

  const [text, seText] = useState('')
  const [amount, seTamount] = useState(0)
  const { add } = useContext(GlobalContext)

   
  const Submit = e => {
    e.preventDefault()
    let newTran = {
      text,
      amount:parseInt(amount)
    }
    add(newTran)
    seText('')
    seTamount('')
   }
    return (
        <Fragment>
        <h3>Add new Transaction</h3>
        <form action="" onSubmit={Submit} >
          <div className="form-control">
            <div id="alert">Please enter all fields !!</div>
            <input type="text" value={text} onChange={(e)=>seText(e.target.value)} placeholder="Enter text" />
          </div>
          <div className="form-control">
            <label htmlFor="">
              Amount <br />
              (negative-expense,positive-iconme)
            </label>
            <input type="number" value={amount} onChange={(e)=>seTamount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn" >Add transaction</button>
        </form>
        </Fragment>
    )
}
