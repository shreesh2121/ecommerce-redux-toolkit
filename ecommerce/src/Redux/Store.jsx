import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import CartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    products: productReducer,
    cart:CartReducer,
  },
});

export default Store;
