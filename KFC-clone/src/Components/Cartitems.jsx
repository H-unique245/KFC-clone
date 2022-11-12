import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getcartItem,
  priceSet,
} from "../Redux/cartRedux/cart.actions";
import Cartitem from "./Cartitem";
import styles from "./styles/Cart.module.css";

function Cartitems() {
  const { data, loading, error } = useSelector(
    (store) => store.cart
  );
  const total = () => {
    const price = data.reduce(
      (sum, i) => (sum += i.price * i.qty),
      0
    );

    dispatch(priceSet(price));
  };

  useEffect(() => {
    total();
  }, [data]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcartItem());
  }, []);
  if (loading) {
    return (
      <h1>
        <img
          src="https://i.pinimg.com/originals/ee/1d/08/ee1d081c5bdf966b058c1a6588e73e8a.gif"
          alt=""
        />
      </h1>
    );
  } else if (error) {
    return <h1>Error..</h1>;
  } else
    return (
      <div>
        <div>
          {data.map((el) => {
            return <Cartitem key={el.id} data={el} />;
          })}
        </div>
      </div>
    );
}

export default Cartitems;
