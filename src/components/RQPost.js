import axios from "axios";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "react-query"

export const RQPage = () => {
    
    const onSuccess=()=>{
        console.log("Perform side effect after data fetching")
    }

    const onError=()=>{
        console.log("Perform side effect after encountering error")
    }
    const { data, isLoading, isError,error,isFetching,refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => axios.get('http://localhost:4000/posts1'),
        // cacheTime:5000,
        // staleTime:0,
        // refetchOnMount:true,
        // refetchOnWindowFocus:true,
        // refetchInterval:3000,
        // refetchIntervalInBackground:true,
        // enabled:false,
        onSuccess,
        onError,
        // select:(data)=>{
        //   const postNames=data.map((post)=>return post)
        // }
    })
    // const { data, isLoading, isError } = useQuery('posts',()=>{
    //     return axios.get('http://localhost:4000/posts')
    // })
    if(isLoading || isFetching){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }
    console.log("isLoading:",isLoading,"isFetching:",isFetching)

    return (
       <>
        <h1>React Query Post</h1>
        <button onClick={refetch}>Click here to get the posts</button>
        {data?.data.map((item) => { return <div key={item.id}>{item.title}</div> })}
       </>
           
       

    )
}