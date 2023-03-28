import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link><br/>
      <Link to='about'>Aboout</Link>
    </div>
  )
}
