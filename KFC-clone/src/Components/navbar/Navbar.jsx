import "./navbar.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Button, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../Redux/Auth/auth.action";

const GetData = async (values) => {
  let res = await axios.post(
    `https://backend-server-kfc.herokuapp.com/users/singleuser`,values);
  return res;
};

const Navbar = () => {
  const [name, setname] = useState("signup");
  const { price } = useSelector((store) => store.cart);
  let ID = JSON.parse(localStorage.getItem("id"));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authLogout());
    setname("signup");
  };

  const idCollecter = () => {
    let datas = { _id:ID };
    GetData(datas)
      .then((res) => {
        let firstName = res.data.split(" ");
        setname(firstName[0]);
      })
      .catch((e) => {
        setname("signup");
        console.log(e);
      });
  };
  console.log(ID);

  useEffect(() => {
    if (ID) {
      idCollecter();
    }
  },[ID]);

  return (
    <>
      <div className="nav_main">
        <div className="left_side">
          <Link to="/">
    
            <Image className="logo_img" src="/logoeatmore1.png" alt="" />
          </Link>

          <b>
            <Link className="link" to="/menu">
              Menu
            </Link>
          </b>
          <b>
            <Link className="link" to="/menu">
              Deals
            </Link>
          </b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b>
            <Link className="link" to={ID ? "/" : "/signup"}>
              {name}
            </Link>
          </b>
          {ID ? (
            <Button
              colorScheme="grey"
              onClick={handleClick}
              color="white"
              bgColor="black"
            >
              Signout
            </Button>
          ) : (
            ""
          )}

          <h6 className="cartCountItems">₹ { price}</h6>

          <Button bgColor="white" onClick={()=>navigate("/cart")}>
            <img className="cart_img" src="/cart.svg" alt="" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
