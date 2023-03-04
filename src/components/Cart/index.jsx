import React from "react";
import styles from "./Cart.module.scss";
import CartEmpty from "../CartEmpty";
import CartItems from "../CartItems";
import { setOpenCart } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const openCart = useSelector((state) => state.cartSlice.openCart);
  const cartItem = useSelector((state) => state.cartSlice.cartItem);

  const onClickCart = () => {
    dispatch(setOpenCart(!openCart));
  };

  return (
    <div className={styles.root}>
      {cartItem.length > 0 ? (
        <>
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
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
