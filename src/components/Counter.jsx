import React, { useContext } from 'react'
import { couterContext } from '../context/CouterContext'

const Counter = () => {

    const {count, incr, decr} = useContext(couterContext)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={decr}>MINUS</button>
        <button onClick={incr}>PLAS</button>
        </div>
  )
}

export default Counter