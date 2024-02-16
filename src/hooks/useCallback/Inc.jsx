import React, { useState } from 'react'

const Inc = ({updateInc}) => {
    const [inc, setInc] = useState(0)

    const increment = () => {
        setInc(inc + 1)
        updateInc(inc)
    }

  return (
    <div>
    <button onClick={increment}> + </button> {inc}
    </div>
  )
}

export default Inc