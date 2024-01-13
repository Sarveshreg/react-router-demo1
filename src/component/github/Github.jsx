import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data=useLoaderData()
  return (
    <div>Github location: {data.name}</div>
  )
}

export default Github

export let info=async  ()=>{
    let result=await fetch("https://api.github.com/users/Sarveshreg");
    let data= await result.json();
    return data;
}