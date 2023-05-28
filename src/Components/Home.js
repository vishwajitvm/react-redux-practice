import React from "react";

export default function Home(props) {
  console.warn("HOME:=>" , props.data);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="image-wrapper item">
          <img src="https://freepngimg.com/thumb/apple_iphone/5-2-apple-iphone-png-picture.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => props.addToCartHandler({ price: 1000 , name: 'I-phone 11' })} > Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
