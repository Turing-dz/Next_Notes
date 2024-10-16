import React from 'react'

export default function Button(props) {
  return (
    <button onClick={()=>{props.setCount((prev)=>{return prev+1})}}>+</button>
  )
}
