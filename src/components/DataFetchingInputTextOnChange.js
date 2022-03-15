// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingInputTextOnChange() {

    const [post, setPost] = useState({}) // H αρχική τιμή είναι ένα άδειο Object.
    const [id, setId] = useState(1)      // Η αρχική τιμή είναι 1.
       

    // Fetching
    useEffect(() => { //Accepts an arrow function
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)  // Backticks
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]) // data fetch only once

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} /> {/* //1. */}          

            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingInputTextOnChange
