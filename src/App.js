import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './components/ui/Header'
import axios from 'axios'
import LoadingGif from './img/spinner.gif'

import Loading from './components/Loading'
import Cast from './components/Cast';
import No from './components/No';
import Single from './components/Single'
import Home from './components/Home'

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


const App = ()=>{
  
  return(
    <>
    <Router>
     

    <Route  path="/" exact component={Home}/>
    <Route path="/single/:id" exact>
    <Single/>
    </Route>

    </Router>
    </>
  )
}

export default App;