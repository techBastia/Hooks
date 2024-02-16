import React, {useReducer} from 'react'

const InitialState = 0;

const Reducer = (State, Action) => {
    switch(Action) {
        case "inc" : return State  + 1
        case "dec" : return State - 1
        case "reset" : return InitialState
        default : return State
    }
}

export const Counter = () => {

   const [count, dispatch] = useReducer(Reducer, InitialState)

  return (
    <>  {count}
        <button onClick={() => dispatch('inc')}>Increment</button>
        <button onClick={() => dispatch('dec')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}
