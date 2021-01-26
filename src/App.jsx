
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AppHome from './AppHome'
import AppAbout from './AppAbout'
import AppUsers from './AppUsers'
import AppUser from './AppUser'

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about"><AppAbout /></Route>
          <Route path="/users/:name"><AppUser /></Route>
          <Route path="/users"><AppUsers /></Route>
          <Route path="/"><AppHome /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
