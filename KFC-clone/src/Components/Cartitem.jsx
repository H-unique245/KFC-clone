import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemcataList from "./ItemcataList";
import styles from "./styles/Cart.module.css";

function Cartitem({ data, deleteItem }) {
  const [cataShow, setCataShow] = useState(false);
  useEffect(() => {
    if (data.cata.length <= 3) {
      setCataShow(true);
    }
  }, []);

  return (
    <div>
      <div className={styles.cartitem}>
        <div className={styles.m}>
          <img className={styles.cartitemImg} src={data.img} alt={data.tital} />
          <div className={styles.cartbtnCont}>
            <div>
              <button
                className={styles.cartitembtn}
                onClick={() => setCataShow(!cataShow)}
              >
                <span className={styles.cartitemDish}>{data.tital}</span>
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
                    deleteItem(data.id);
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
                  <button className={styles.counterInc}></button>
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
