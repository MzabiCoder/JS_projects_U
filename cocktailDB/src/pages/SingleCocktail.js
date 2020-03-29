import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
 import axios from 'axios'


const SingleCocktail = () => {
  
  const { id } = useParams()
  const [loading, seLoading] = useState(false)
  const [cocktail,setCocktail]=useState(null)
  useEffect(() => {
   
    const fetchSingle = async (id) => {
      seLoading(true)
      try {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12345
`)
        // console.log(res.data)
seLoading(false)
      } catch (error) {
         console.log(error)
      }
      
       
    }

    fetchSingle()
    
  },[id])


  return <h1>Single cocktail page id :{id}</h1>
}

export default SingleCocktail
