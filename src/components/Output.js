import React from 'react'
import { useSelector } from 'react-redux'

export default function Output() {
  const state= useSelector(state => state.count)
  return (
    <div>
      <h1>{state}</h1>
    </div>
  )
}
