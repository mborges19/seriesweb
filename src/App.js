import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoxSeries from './components/series/BoxSeries'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Autores from './components/Autores';

const NotFound = () => {
  return (
    <div>
      <h1>
        Página não encontrada
      </h1>
    </div>

  )
}

class App extends Component{
  
  render(){
    return (
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route path='/series' component={BoxSeries}/>
            <Route path='/autores'component={Autores}/>
            <Route exact path='/' component={Home}/>            
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
