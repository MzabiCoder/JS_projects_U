import React,{Fragment} from 'react'

export const AddTrans = () => {
    return (
        <Fragment>
        <h3>Add new transaction</h3>
        <form action="" id="form">
          <div className="form-control">
            <div id="alert">Please enter all fields !!</div>
            <label for="">Text</label>
            <input type="text" id="text" placeholder="Enter text" />
          </div>
          <div className="form-control">
            <label for="">
              Amount <br />
              (negative-expense,positive-iconme)
            </label>
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn" type="submit">Add transaction</button>
        </form>
        </Fragment>
    )
}
