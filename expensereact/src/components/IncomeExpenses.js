import React, { Fragment } from 'react'

 const IncomeExpenses = () => {
    return (
        <Fragment>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money money-plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money money-minus">+$0.00</p>
        </div>
      </div>
        </Fragment>
    )
}

export default IncomeExpenses
