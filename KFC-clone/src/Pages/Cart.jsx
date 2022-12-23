import React, { useEffect, useState } from "react";
import CartItemComponent from "../Components/CartItemComponent";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/main_button/Button";
import {
  deleteItem,
  getcartItem,
} from "../Redux/cartRedux/cart.actions";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  // const { data } = useSelector((store) => store.cart);
  const data = [
    {
      id: "62ac55446d5d09f1b64880db",
      image:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K511.jpg?ver=1.10",
      price: 499,
      cata: [
        "Peri Peri 5 Leg Pc",
        "Eggless Mayo",
        "Nashville Hot Pepper Dip",
        "French Fries -Medium",
        "Pepsi PET",
      ],
      title: "5pc Leg Piece Bucket & 2 Dips",
      qty: 1,
    },
    {
      id: "62ac55446d5d09f1b64880e2",
      image:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K012.jpg?ver=1.10",
      price: 619,
      cata: [
        "Peri Peri 5 Leg Pc",
        "Eggless Mayo",
        "Nashville Hot Pepper Dip",
        "French Fries -Medium",
        "Pepsi PET",
      ],
      title: "6 pc Hot & Crispy Chicken",
      qty: 1,
    },
    {
      id: "62ac55446d5d09f1b64880e0",
      image:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/D-K445.jpg?ver=1.10",
      price: 499,
      cata: [
        "Peri Peri 5 Leg Pc",
        "Eggless Mayo",
        "Nashville Hot Pepper Dip",
        "French Fries -Medium",
        "Pepsi PET",
      ],
      title: "5pc Smoky Red Chicken",
      qty: 1,
    },
  ];
  const [products, setProducts] = useState(data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleclick = (id) => {
    setTimeout(() => {
      dispatch(getcartItem());
      setProducts(data);
    }, 1000);
    dispatch(deleteItem(id));
  };
  useEffect(() => {
    dispatch(getcartItem());
  }, [products]);

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
      <CartItemComponent
        data={data}
        handleclick={handleclick}
      />
      <br />
      <br />
    </div>
  );
}

export default Cart;
