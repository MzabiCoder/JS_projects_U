import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Abou from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <Router>
      
    <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/about" component={Abou} />
        <Route path="/cocktail/:id" component={SingleCocktail}/>
        <Route path="*"  component={Error} />
        </Switch>
    </Router>
  )
}

export default App
