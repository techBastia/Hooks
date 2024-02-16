import React from 'react'
import {UserContext} from '../../../App'

export const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          value => {
            return <div>user context value {value}</div>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}
