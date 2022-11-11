import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemcataList from "./ItemcataList";
import styles from "./styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  getcartItem,
  updateQty,
} from "../Redux/cartRedux/cart.actions";

function Cartitem({ data }) {
  const [cataShow, setCataShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.cartitem}>
        <div className={styles.m}>
          <img
            className={styles.cartitemImg}
            src={data.avatar}
            alt={data.first_name}
          />
          <div className={styles.cartbtnCont}>
            <div>
              <button
                className={styles.cartitembtn}
                onClick={() => setCataShow(!cataShow)}
              >
                <span className={styles.cartitemDish}>{data.first_name}</span>
                <img
                  className={styles.arrow}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACfSURBVHgBhY6xDQIhFIZBob8RjoLeEbAgARpXcAQ30FF0Aq8DQ3FxA12A2tIBSPCRWNy9u8v9CXk8+L68RwhEKdWQlRhjVK1ba+2Jc34XQjxSSp852Dl3hnKVUr43pZQOmi9jrNda7+ZgYC5wbt77jv7HtZTSHq5NznkfY3xhOIRwrG90sONIgjUPGB4JSGprj+GJMJQAfmJ4MVVa+vsBbdRQgsrQ68QAAAAASUVORK5CYII="
                  alt=""
                />
              </button>
              {cataShow ? <ItemcataList data={data.cata} /> : null}
            </div>
            <div className={styles.cartActions}>
              <div>
                <span
                  onClick={() => {
                    dispatch(deleteItem(data.id));
                    console.log("m");
                  }}
                  className={styles.removebtn}
                >
                  Remove
                </span>
              </div>
              <div className={styles.cartCounterP}>
                <div className={styles.cartCounterC}>
                  <button className={styles.counterDec}></button>
                  <span className={styles.counterVal}>{data.qty}</span>
                  <span className={styles.srOnly}></span>
                  <button
                    onClick={() => dispatch(updateQty(data.id))}
                    className={styles.counterInc}
                  ></button>
                </div>
                <div className={styles.itemPrice}>$588</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
