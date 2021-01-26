
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function AppUser () {
  const location = useLocation()
  const { name } = useParams()
  console.log('AppUser', name, location)

  return (
    <div>
      User: {name}
    </div>
  )
}

export default AppUser
