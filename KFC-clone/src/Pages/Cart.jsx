import React from "react";
import CartItemComponent from "../Components/CartItemComponent";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/main_button/Button";

function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <Button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Order More
        </Button>
      </div>
      <CartItemComponent s />
    </div>
  );
}

export default Cart;
