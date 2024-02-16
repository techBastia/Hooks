// import React from 'react'
import Inc from './Inc';
import Dec from './Dec';
import { useCallback, useRef } from 'react';

function CallbackCounter() {
   const incVal =  useRef(0)
    const decVal = useRef(10)

    const increment = useCallback((newInc) => {
        incVal.current = (newInc)
        console.log('this is inc');
    }, [incVal])

    const decrement = useCallback(
        (newDec) => {
            decVal.current = (newDec);
          console.log('this is dec');
        },
        [decVal]
      );

  return (
    <>  
        <Inc updateInc={increment}/>
        <Dec updateDec={decrement}/>
    </>
  )
}

export default CallbackCounter