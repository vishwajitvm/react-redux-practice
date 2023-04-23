import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <h1>Child Component  </h1>
      <h3>Name: {props.data.name} </h3>
      <h3>Age: {props.data.age} </h3>
    </div>
  )
}
