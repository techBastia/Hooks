import React, { useState } from 'react'

const Dec = ({updateDec}) => {
    const [dec, setDec] = useState(10)

    const decrement = () => {
        setDec(dec - 1)
        updateDec(dec)
        }

  return (
    <div>
    <button onClick={decrement}> - </button> {dec}
    </div>
  )
}

export default Dec