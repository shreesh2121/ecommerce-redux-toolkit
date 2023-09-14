import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";
import { useEffect } from "react";
import "./Products.css";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { addItem } from "../Redux/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";

function Products() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);

  
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error:{error}</div>;
  }

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  );
}

export default Products;
