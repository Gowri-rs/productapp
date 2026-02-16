import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
  const data = localStorage.getItem("cart");

  if (data) {
    setCart(JSON.parse(data));
  }
}, []);

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;