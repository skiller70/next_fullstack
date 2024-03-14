
import axios from 'axios'
import React from 'react'

const page = async ({params}) => {

    const {data} = await axios.get(`http://localhost:4000/getUser${params.userId}`)


    console.log(data)
  return (
    <div>
    <div>this is page route </div>
    <h1>name is {data.name}</h1>
    <h1>age is {data.age}</h1>
    <h1>user id  is {data.userId}</h1>
    </div>
  )
}

export default page