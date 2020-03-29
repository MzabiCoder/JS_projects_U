import React, { useState,useEffect} from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import axios from 'axios'

const Home = () => {

  const [cocktails, setCocktails] = useState([])
  const [text, seText] = useState('f')
  const [loading, seLoading] = useState(false)

 
  useEffect(() => {
    // async function fetchData() {
    //   // You can await here
    //   const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    //   setCocktails(res.data.drinks);
    //   console.log(cocktails);
      
    //   // ...
    // }
    // fetchData();
    //   // eslint-disable-next-line  
    async function fetchData() {

       try {
        const res= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
        setCocktails(res.data.drinks)
        seLoading(!loading)
       } catch (error) {
         console.log(error);
         
       }
    
        
    }
    fetchData()
  },[setCocktails])



  
  return (
    <main>
      <SearchForm text={text} seText={seText} />
      <CocktailList cocktails={cocktails} loading={loading}  />
    </main>
  )
}

export default Home
