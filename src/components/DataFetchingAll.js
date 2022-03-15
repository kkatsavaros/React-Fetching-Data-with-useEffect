// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingAll() {

    const [posts, setPosts] = useState([])// Είναι ίσα με ένα άδειο πίνακα.

    // Fetching
    useEffect(() => { //Accepts an arrow function
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []) //data fetch only once

    return (
        <div>
            <ul>{
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
            </ul>
        </div>
    )
}

export default DataFetchingAll
