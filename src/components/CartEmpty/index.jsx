import React from "react";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <h1>Корзина пустая</h1>
      <img
        src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
        alt="cartEmpty"
      />
      <a href="/">
        <button>Вернуться назад</button>
      </a>
    </div>
  );
};

export default CartEmpty;
