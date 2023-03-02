import React from "react";
import styles from "./Cart.module.scss";
import { CartContext } from "../../App";
import axios from "axios";

const CartItems = ({ id, imageUrl, price, tittle }) => {
  const { cartItem, setCartItem } = React.useContext(CartContext);
  const onClickDelet = (id) => {
    // setCartItem((prev) => prev.filter((obj) => obj.id !== id));
    axios.delete(`https://639c95a242e3ad6927364e55.mockapi.io/cart/${id}`);
  };

  return (
    <div className={styles.cartItem} key={id}>
      <img src={imageUrl} alt="sneakers" />
      <p>{tittle}</p>
      <b>{price} р.</b>
      <button onClick={() => onClickDelet(id)} className={styles.buttonDelete}>
        Delete
      </button>
    </div>
  );
};

const Cart = () => {
  const { openCart, setOpenCart, cartItem } = React.useContext(CartContext);

  const onClickCart = () => {
    setOpenCart(!openCart);
  };
  return (
    <div className={styles.root}>
      <div>
        <h1>Корзина</h1>
        <h3>Очистить корзину</h3>
      </div>
      <div className={styles.cartScroll}>
        {cartItem.map((item) => (
          <CartItems {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.count}>
          <p>Количество: </p>
          <b> 10 шт</b>
        </div>
        <div>
          <p>Итоговая сумма: </p>
          <b> 5000 р.</b>
        </div>
      </div>
      <div className={styles.button}>
        <button onClick={onClickCart} className={styles.button1}>
          Вернуться назад
        </button>
        <button className={styles.button2}>Оплатить сейчас</button>
      </div>
    </div>
  );
};

export default Cart;
