import React, {useContext} from 'react'

import {Username, Userage} from '../../../App'

export const ComponentC = () => {

 const userName =   useContext(Username)
 const age = useContext(Userage)

  return (
    <div>My name is {userName} and i am {age} old</div>
  )
}
