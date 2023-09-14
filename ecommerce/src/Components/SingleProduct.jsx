// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function SingleProduct() {
//   const { id } = useParams();

//   const [data, newData] = useState([]);

//   console.log(data);
//   const fetchData = () => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => newData(data));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (

//     <div style={{
//       display:"flex",
//       justifyContent:"center",
//       alignItems:"center"
//     }} >
//       <img src={data.image} width="500" alt="" />
//     <ul key={data.id} className="product-1" style={{height:"90vh"}}>
//       <li value={data.id}>{data.title}</li>
//       <li>{data.price}</li>
//       <li>
//         <button className="button-1">Add to cart</button>
//       </li>
//     </ul>
//   </div>
// );
// }

// export default SingleProduct;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../Redux/CartSlice";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((product) => product.id === Number(id));


  const isProductInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === product.id)
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  // Check if the product is already in the cart

  // Button text based on product quantity
  const buttonText = isProductInCart ? "Go to cart" : "Add to cart";

  const addToCart_btn = () => {
    dispatch(
      addItem({
        product,

        quantity: 1,
      })
    );
    toast("Added to cart");
    console.log(isProductInCart);
    // console.log(product)
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={product.image} width="500" alt="" />
      <ul key={product.id} className="product-1" style={{ height: "90vh" }}>
        <li value={product.id}>{product.title}</li>
        <li value={product.id}>{product.description}</li>
        <li>{product.price}</li>
        <li>
          <button
            value={product.id}
            className="button-1"
            onClick={addToCart_btn}
          >
            {buttonText}
          </button>
          <ToastContainer />
        </li>
      </ul>
    </div>
  );
}

export default SingleProduct;
