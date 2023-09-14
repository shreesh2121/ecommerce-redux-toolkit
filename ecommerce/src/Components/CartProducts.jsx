import React, { useState, useEffect } from "react";
import { removeItem, updateItemQuantity } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

function CartProducts({ cartProduct }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(cartProduct.price * cartProduct.quantity);

  // Load quantity from localStorage on component mount
  useEffect(() => {
    const storedQuantity = localStorage.getItem(
      `cartQuantity_${cartProduct.id}`
    );
    if (storedQuantity) {
      setCount(parseInt(storedQuantity, 10));
    }
  }, [cartProduct.id]);

  useEffect(() => {
    // Update the price whenever the quantity changes
    setPrice(cartProduct.price * count);
  }, [cartProduct.price, count]);


  const incrementCount = () => {
    if (count < 15) {
      const newCount = count + 1;

      setCount(newCount);
      dispatch(updateItemQuantity({ id: cartProduct.id, quantity: newCount }));
      
    }
  };


  const decrementCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(updateItemQuantity({ id: cartProduct.id, quantity: newCount}));
    } else {
      dispatch(removeItem(cartProduct.id)); // Remove the item from the cart when count becomes 0
      localStorage.removeItem(`cartQuantity_${cartProduct.id}`);
    }
  };


  return (
    <ul key={cartProduct.id}>
      <li>
        <img src={cartProduct.image} alt="product" width="50px" />
        {cartProduct.title} - Quantity:
        <button onClick={decrementCount}>Decrement</button>
        <input
          type="number"
          value={count}
          readOnly
        />
        <button onClick={incrementCount}>Increment</button>
        <p>Product price : ${cartProduct.price}</p>
        <h5>Total price : ${price.toFixed(2)}</h5>
        <button onClick={() => dispatch(removeItem(cartProduct.id))}>
          Remove
        </button>
        <br />
     
      </li>
    </ul>
  );
}

export default CartProducts;
