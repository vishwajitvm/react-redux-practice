import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    <div>
      <ChildComponent data={{name:"Vishwajit vm" , age: 25}} />
    </div>
  )
}
