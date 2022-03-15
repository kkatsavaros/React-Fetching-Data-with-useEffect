// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})// Είναι ίσα με ένα άδειο πίνακα.
    const [id, setId] = useState(1) //2.
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    // Fetching
    useEffect(() => { //Accepts an arrow function
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick]) //data fetch only once

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} /> {/* //1. */}

            <button type="button" onClick={handleClick}>Fetch Post</button>

            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
