
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AppUsers () {
  const location = useLocation()
  console.log('AppUsers', location)

  return (
    <div>
      Users
      <ul>
        <li><Link to="/users/jim">Jim</Link></li>
        <li><Link to="/users/steve">Steve</Link></li>
        <li><Link to="/users/tony">Tony</Link></li>
        <li><Link to="/users/mike">Mike</Link></li>
        <li><Link to="/users/kirk">Kirk</Link></li>
        <li><Link to="/users/nigel">Nigel</Link></li>
        <li><Link to="/users/harold">Harold</Link></li>
      </ul>
    </div>
  )
}

export default AppUsers
