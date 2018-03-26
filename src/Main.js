import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Displayer from './components/Displayer'

const Main = () => (
  <main>
    <Switch>      
      <Route exact path='/' component={Login}/> 
      <Route path='/displayer' component={Displayer}/>
    </Switch>
  </main>
)

export default Main
