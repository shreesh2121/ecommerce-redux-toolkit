import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CartValue() {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  // Calculate the total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total value of the products
  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,0
  );

  return (
    <div>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
    </div>
  );
}

export default CartValue;
