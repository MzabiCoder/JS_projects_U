import React,{useState} from 'react'

const SearchForm = ({seText}) => {


  const [text,setTex]=useState('')

  return (
    <div className="section">
      <h2 className="section-title">Search cocktails</h2>
      <form action="" className="form search-form" onSubmit={(e) => {
        e.preventDefault()
      
      }}>
        
        <label htmlFor="">Search Your drink</label>
        <input type="text" id="name"    />
      </form>
    </div>
  )
}

export default SearchForm
