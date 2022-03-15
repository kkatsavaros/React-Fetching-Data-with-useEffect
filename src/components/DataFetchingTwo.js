// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {} //empty object
}

const reducer = (state, action) => { // reducer function accepts state and action

    switch (action.type) { 
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }

        default:
            return state
    }

}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState) // Καλούμε την useReducer και περνάει μέσα την reducer function 
    // και το Object Initial State που μόλις ορίσαμε.
    // Επιστρέφει ένα ζευγάρι τιμών το state και το dispatch.


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {   // Αν το request είναι επιτυχημένο δημιουργούμε 3 state transmisions
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })

            })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}

            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
