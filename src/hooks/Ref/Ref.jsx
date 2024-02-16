import React, { useRef, useEffect } from 'react'

const Ref = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    
  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default Ref