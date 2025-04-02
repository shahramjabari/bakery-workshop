import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ item, cartContent, setCartContent }) => {
  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      <button>Add To Cart</button>
    </div>
  );
};

export default MenuItem;
