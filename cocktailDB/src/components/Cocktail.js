import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({ item }) => {

  //console.log(item);
  
  return <article className="cocktail">
    <div className="img container">
      <img src={item.strDrinkThumb} alt=""/>
    </div>
    <div className="cocktail-footer">
      <h3>{item.strDrink}</h3>
      <h4>{item.strGlass}</h4>
      <p>{item.strInstructions}</p>
    </div>
    <Link className="btn btn-primary btn-details" to={`/cocktail/${item.idDrink}`}>detais</Link>
  </article>
}

export default Cocktail
