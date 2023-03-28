import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slicer/count'

export default function Input() {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.count)
  return (
    <div>
      <button
        onClick={()=> dispatch(increment(1))}
      >+</button>
      ---------------
      <button
        onClick={()=> dispatch(decrement(2))}
      >-</button>
      <h1>{state}</h1>
    </div>
  )
}
