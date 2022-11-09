import React from "react";
import { useState } from "react";
import Cartitem from "./Cartitem";
import styles from "./styles/Cart.module.css";
const init = [
  {
    id: 1,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg",
    tital: "  The Allu Arjun Combo",
    cata: [
      "Hot & Crispy Chicken-1pc",
      "Grilled Chicken - Smoky Red -1 pc",
      "Chicken Popcorn-Regular",
      "Thousand Island",
      "Spicy Mix Fries -Medium",
    ],
  },
  {
    id: 2,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg",
    tital: "  The Allu Arjun Combo",
    cata: [
      "Hot & Crispy Chicken-1pc",
      "Grilled Chicken - Smoky Red -1 pc",
      "Chicken Popcorn-Regular",
      "Thousand Island",
      "Spicy Mix Fries -Medium",
    ],
  },
  {
    id: 3,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg",
    tital: "  The Allu Arjun Combo",
    cata: [
      "Hot & Crispy Chicken-1pc",
      "Grilled Chicken - Smoky Red -1 pc",
      "Chicken Popcorn-Regular",
      "Thousand Island",
      "Spicy Mix Fries -Medium",
    ],
  },
  {
    id: 4,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg",
    tital: "  The Allu Arjun Combo",
    cata: [
      "Hot & Crispy Chicken-1pc",
      "Grilled Chicken - Smoky Red -1 pc",
      "Chicken Popcorn-Regular",
    ],
    qty: 4,
  },
];
function Cartitems() {
  const [data, setdata] = useState(init);
  const deleteItem = (id) => {
    console.log(id);
    const newData = data.filter((el) => {
      return el.id !== id;
    });
    setdata(newData);
  };
  console.log(data.length);
  return (
    <div>
      {data.length === 0 ? (
        <div className={styles.emptyCart}></div>
      ) : (
        <div>
          {" "}
          {data.map((el) => {
            return <Cartitem key={el.id} data={el} deleteItem={deleteItem} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Cartitems;
