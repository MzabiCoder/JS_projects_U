import React, { Fragment,useContext } from 'react'
import { GlobalContext } from '../context/state'
import {numberWithCommas} from '../utils/function'



const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  let amounts=transactions.map(tran=>tran.amount)
   const income = amounts.filter(item => item > 0)
  .reduce((a, b) => a += b, 0).toFixed(2)
 
const expense = amounts.filter(item => item < 0)
    .reduce((a, b) => a += b, 0) * -1
  
    return (
        <Fragment>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
            <p id="money-plus" className="money money-plus">+${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
            <p id="money-minus" className="money money-minus">-${numberWithCommas(expense)}</p>
        </div>
      </div>
        </Fragment>
    )
}

export default IncomeExpenses
