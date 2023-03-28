import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {
  const state = useSelector(state=> state.count)
  return (
    <div>
      <h1>about page</h1>
      <h2>{state}</h2>
    </div>
  )
}
