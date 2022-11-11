import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/home/Home";
import Account from "../Pages/Account";
import Cart from "../Pages/Cart";
import MenuPage from "../Pages/MenuPage";
import Error from "../Pages/Signup/Error";
import Signup from "../Pages/Signup/Signup";
import Signup2 from "../Pages/Signup/Signup2";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/signup" element={<Signup2 />} />
        <Route path="/account" element={<Account />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<p>404 Error</p>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
