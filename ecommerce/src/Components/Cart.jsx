import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import {  useSelector,useDispatch } from "react-redux";
import CartProducts from "./CartProducts";
import CartValue from "./CartValue";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cartProduct) => (

            <CartProducts key={cartProduct.id} cartProduct={cartProduct}/>

          ))}
        </div>
        )}
        <CartValue/>
    </Container>
  );
}

export default Cart;
