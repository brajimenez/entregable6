import { useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/slice/products.slice";

import Login from "./pages/Login";
import ProductInfo from "./pages/ProductInfo";
import Home from "./pages/Home";
import axios from "axios";
import { getUserCart } from "./store/slice/cart.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getUserCart());
  }, []);

  // Este es el codigo para crear un usuario

  // useEffect(() => {
  //   const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
  //   const data = {
  //     firstName: "Brarlyns",
  //     lastName: "Jimenez",
  //     email: "elbraily00@gmail.com",
  //     password: "bra1234",
  //     phone: "8097120316",
  //     role: "admin",
  //   };

  //   axios
  //     .post(URL, data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
