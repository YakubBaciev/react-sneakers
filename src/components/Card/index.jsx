import React from "react";
import styles from "./Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCartItem, setTotalPrice } from "../../redux/slices/cartSlice";

const Card = ({ id, imageUrl, tittle, price }) => {
  const { items, cartItem } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  const [click, setClick] = React.useState(true);

  const onClickButton1 = (id) => {
    // const sumPrice = cartItem.reduce((sum, obj) => obj.price + sum, 0);
    dispatch(setTotalPrice());
    const itemFind = items.find((obj) => obj.id === id);
    dispatch(setCartItem(itemFind));

    setClick(!click);
  };

  const onClickButton2 = () => {
    setClick(!click);
  };

  return (
    <div className={styles.root}>
      <img width={133} height={112} src={imageUrl} alt="" />
      <p>{tittle}</p>
      <div className={styles.price}>
        <div>
          <span>Цена:</span>
          <b>{price} р.</b>
        </div>
        <button onClick={() => onClickButton1(id)}>
          {click ? (
            <img className={styles.img1} src="/img/plus.svg" alt="add" />
          ) : (
            <img
              onClick={() => onClickButton2()}
              className={styles.img2}
              src="/img/cheked.svg"
              alt="save"
            />
          )}
        </button>
      </div>
    </div>
  );
};
export default Card;
