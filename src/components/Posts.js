import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        axios.get('http://localhost:4000/posts').then((res) => {
            // console.log(res.data)
            setData(res.data)
            setLoading(false)
        }).catch((error => { setError(error.message) }))
    }, [])

    if (loading) { return <div>Loading....</div> }
    if (error) { return <div>{error}</div> }

    return (
        <>
            <h1>Post Page</h1>
            {data.map((item) => {
                return <div key={item.id}>{item.title}</div>
            })}
        </>
    )
}