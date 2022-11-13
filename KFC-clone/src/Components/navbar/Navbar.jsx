import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const GetData = async (values) => {
  let res = await axios.post(`/users/singleuser`, values);
  return res;
};

const Navbar = () => {
  const [name, setname] = useState("signup");
  const { price } = useSelector((store) => store.cart);
  const id = JSON.parse(localStorage.getItem("id"));
  console.log(id);

  if (id) {
    GetData(id)
      .then((res) => {
        setname(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log("error");
      });
  }

  useEffect(() => {}, [name]);

  return (
    <>
      <div className="nav_main">
        <div className="left_side">
          <Link to="/">
            {" "}
            <img
              className="logo_img"
              src="/logoeatmore1.png"
              alt=""
            />
          </Link>

          <b>
            <Link className="link" to="/menu">
              Menu
            </Link>{" "}
          </b>
          <b>
            <Link className="link" to="/menu">
              Deals
            </Link>{" "}
          </b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b>
            <Link className="link" to="/signup">
              {name}
            </Link>{" "}
          </b>
          {id ? (
            <Button
              colorScheme="grey"
              color="white"
              bgColor="black"
            >
              Signout
            </Button>
          ) : (
            ""
          )}

          <h6 className="cartCountItems">₹ {price}</h6>

          <Link to="/cart">
            <img
              className="cart_img"
              src="/cart.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
