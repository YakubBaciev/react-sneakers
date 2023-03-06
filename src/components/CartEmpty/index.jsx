import React from "react";
import styles from "./CartEmpty.module.scss";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <h1>Корзина пустая</h1>
      <img
        src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
        alt="cartEmpty"
      />
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default CartEmpty;
