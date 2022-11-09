import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../Pages/Account";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MenuPage from "../Pages/MenuPage";
import Signup from "../Pages/Signup/Signup";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<p>404 Error</p>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
