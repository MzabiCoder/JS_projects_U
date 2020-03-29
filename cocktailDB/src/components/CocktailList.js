import React from 'react'
import Spinner from './Spinner'
import Cocktailfrom from './Cocktail'
import Cocktail from './Cocktail'

const CocktailList = ({ cocktails,loading }) => {
 // console.log(cocktails);
  
  if (!loading) {
       return <Spinner/>
     }
  if (cocktails.length === 0) {
       return <h1 className="section-title">No Drinks Are Available</h1> 
     }
  return <section className="section">
    <h2 className="section-title">cocktails</h2>
    <div className="cocktails-center">
      {cocktails.map(item => (
        <Cocktail key={item.idDrink} item={item} />
    ))}
    </div>
  </section>
}

export default CocktailList
