import React,{Fragment} from 'react'

export const TransList = () => {
    return (
        <Fragment>
        <h3>History</h3>
        <ul id="list">
          <li className="minus">
            Cash <span>400</span> <button className="delete-btn">x</button>
          </li>
        </ul> 
        </Fragment>
    )
}
