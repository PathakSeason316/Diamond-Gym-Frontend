import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component={LandingPage} />
          <Route path = "/login" component = {LoginPage} />
          <Route path = "/home" component = {HomePage} />
        </Switch>
    </div>
    </Router>
  )
}

export default App