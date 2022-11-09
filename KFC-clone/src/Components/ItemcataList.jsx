import React from "react";
import styles from "./styles/Cart.module.css";
function ItemcataList({ data }) {
  console.log(data);
  return (
    <div className={styles.unOrderP}>
      <div className={styles.unOrderC}>
        {data.map((el) => {
          return <li key={Math.random()}>{el}</li>;
        })}
      </div>
    </div>
  );
}

export default ItemcataList;
