import React from "react";

export default function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
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
          <button> Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
