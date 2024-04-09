"use client"
import React from 'react'
import { Button } from '../ui/button'

const ShowButton = () => {

    const testing = ()=>{
        console.log("hello")
    }
  return (
    <div>

        <Button onClick={testing}>Click me</Button>
    </div>
  )
}

export default ShowButton