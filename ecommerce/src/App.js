// import logo from './logo.svg';
import "./App.css";
import NavbarContainer from "./Components/NavbarContainer";
import ProductContainer from "./Components/ProductContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter className="App">
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ProductContainer/>} />
        <Route path="products/:id" element={<SingleProduct/>} />
        <Route path="products/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="*" element={<ErrorPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
