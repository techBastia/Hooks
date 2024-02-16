import React, {useReducer} from 'react'

const InitialState = {
    firstCount : 0  
};

const Reducer = (State, Action) => {
    switch(Action.type) {
        case "inc" : return {firstCount : State.firstCount  + Action.val }
        case "dec" : return {firstCount: State.firstCount - Action.val}
        case "reset" : return InitialState
        default : return State
    }
}

export const Counter2 = () => {

   const [count, dispatch] = useReducer(Reducer, InitialState)

  return (
    <>  {count.firstCount}
        <button onClick={() => dispatch({type : 'inc', val: 1})}>Increment</button>
        <button onClick={() => dispatch({type : 'dec',  val: 1})}>Decrement</button>

        <button onClick={() => dispatch({type : 'inc', val: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type : 'dec',  val: 5})}>Decrement by 5</button>

        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  )
}
