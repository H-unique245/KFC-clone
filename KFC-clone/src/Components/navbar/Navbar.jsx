import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../Redux/Auth/auth.action";

const GetData = async (values) => {
  let res = await axios.post(
    `https://backend-server-kfc.herokuapp.com/users/singleuser`,
    values
  );
  return res;
};

const Navbar = () => {
  const [name, setname] = useState("signup");
  let id = JSON.parse(localStorage.getItem("id"));
  const { authnicate } = useSelector((store) => store.signup);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authLogout());
    setname("signup");
  };

  const idCollecter = () => {
    GetData(id)
      .then((res) => {
        let firstName = res.data.split(" ");
        setname(firstName[0]);
      })
      .catch((e) => {
        setname("signup");
        console.log(e);
      });
  };
  console.log(authnicate);

  useEffect(() => {
    if (id) {
      idCollecter();
    }
  }, [id]);

  return (
    <>
      <div className="nav_main">
        <div className="left_side">
          <Link to="/">
            {" "}
            <img className="logo_img" src="/logoeatmore1.png" alt="" />
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
            <Link className="link" to={id ? "/" : "/signup"}>
              {name}
            </Link>
          </b>
          {id ? (
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

          <h6 className="cartCountItems">₹ 0.00</h6>

          <Link to="/cart">
            <img className="cart_img" src="/cart.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
