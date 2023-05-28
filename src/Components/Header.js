import React from 'react'

export default function Header(props) {
  console.warn("HEADER:=>" , props);

  return (
    <div className="add-to-cart">
        <span className="cart-count"> {props.data.lenght} </span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    )
}
