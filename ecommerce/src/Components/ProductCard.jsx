import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../Redux/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch,useSelector } from "react-redux";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

   // Check if the product is already in the cart
   const isProductInCart = useSelector((state) =>
   state.cart.items.some((item) => item.id === product.id)
 );


  const buttonClick = (e) => {
    const id = e.target.value;
    navigate(`/products/${product.id}`);
  };

  const addToCart_btn = () => {
    if (isProductInCart) {
        // If the product is already in the cart, update its quantity
        const existingCartItem = cartItems.find((item) => item.id === product.id);
        dispatch(
          addItem({
            product,
            quantity: existingCartItem.quantity + 1,
          })
        );
      } else {
        // If the product is not in the cart, add it
        dispatch(
          addItem({
            product,
            quantity: 1,
          })
        );
      }
  
      toast("Added to cart");
  
  };

  const goToCart = () => {
    navigate("products/cart");
  };


  return (
    <ul key={product.id} className="product">
      <li>
        <img src={product.image} alt="" width="100" />
      </li>
      <li value={product.id} onClick={buttonClick}>
        {product.title}
      </li>
      <li>{product.price}</li>
      <li>
      {isProductInCart ? (
          <button onClick={goToCart}>Go to cart</button>
        ) : (
          <button onClick={addToCart_btn}>Add to cart</button>
        )}      </li>
    </ul>
  );
}

export default ProductCard;
