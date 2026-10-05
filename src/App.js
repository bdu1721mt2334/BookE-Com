// src/App.js
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./Context";

function App() {

  
  return (
    <Context>
      <div style={{ padding: "10px", backgroundColor: "wheat", border: "1px solid black", borderRadius: "7px" }}>
        <BrowserRouter >
          <Routes  >
            <Route path="/home" element={<Home  />} />
            <Route path="/product" element={<Product  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context>
  );
}

export default App;
