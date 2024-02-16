import axios from 'axios'
import React, {useEffect, useReducer} from 'react'

const initialstate = {
    loading : true,
    error : '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "success":  
        return {
            loading : false,
            post: action.payload,
            error: ''
        }

        case "error" :
            return{
                loading: false,
                post: {},
                error: "Someting went wrong!!!"
            }
        
        default :
        return state
    }
}

export const DataFetchReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type: 'success', payload : response.data})
        })
        .catch(error => {
            dispatch({type: 'error'})
        })
    }, [])

  return (
    <div>
        {state.loading ? "loading" : state.post.title }
        {state.error ? state.error : null}
    </div>
  ) 
}
