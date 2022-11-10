import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcartItem } from "../Redux/cartRedux/cart.actions";
import Cartitem from "./Cartitem";
import styles from "./styles/Cart.module.css";

function Cartitems() {
  const { data } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcartItem());
  }, []);
  return (
    <div>
      {data.length === 0 ? (
        <div className={styles.emptyCart}></div>
      ) : (
        <div>
          {data.map((el) => {
            return <Cartitem key={el.id} data={el} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Cartitems;
