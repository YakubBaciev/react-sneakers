import React from "react";
import styles from "./CartBlock.module.scss";
import CartEmpty from "../CartEmpty";
import CartItems from "../CartItems";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setClearCart } from "../../redux/slices/cartSlice";

const CartBlock = () => {
  const dispatch = useDispatch();
  const { cartItem, totalPrice } = useSelector((state) => state.cartSlice);

  const onClickClear = () => {
    dispatch(setClearCart());
  };

  return (
    <div className={styles.root}>
      {cartItem.length > 0 ? (
        <>
          <div>
            <h1>Корзина</h1>
            <h3 onClick={onClickClear}>Очистить корзину</h3>
          </div>
          <div className={styles.cartScroll}>
            {cartItem.map((item) => (
              <CartItems {...item} key={item.id} />
            ))}
          </div>
          <div className={styles.totalPrice}>
            <div className={styles.count}>
              <p>Количество: </p>
              <b>{cartItem.length} шт</b>
            </div>
            <div>
              <p>Итоговая сумма: </p>
              <b>{totalPrice} р.</b>
            </div>
          </div>
          <div className={styles.button}>
            <Link to="/">
              <button className={styles.button1}>Вернуться назад</button>
            </Link>
            <button className={styles.button2}>Оплатить сейчас</button>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartBlock;
