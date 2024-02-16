import React, { useState } from 'react'

export const State = () => {
const [value, setValue] = useState(0)

  return (
    <div>
    <button onClick={() => setValue(value === 10 ? 10 : value + 1)}> + </button> 
    {value}
    <button onClick={() => setValue(value=== 0 ? 0 : value - 1)}> - </button> 
    </div>
  )
}
