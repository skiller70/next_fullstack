"use client"
import React from 'react'

const ShowCard = (props) => {


  return (
    <div className='max-w-lg rounded-md bg-slate-500 '>
        <h1>name : {props.user.name}</h1>
        <h1>age : {props.user.age}</h1>
        <h1>user id  : {props.user.userId}</h1>



    </div>
  )
}

export default ShowCard