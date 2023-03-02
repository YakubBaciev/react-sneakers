import React from "react";
import styles from "./Card.module.scss";
import { CartContext } from "../../App";
import axios from "axios";

const Card = ({ id, imageUrl, tittle, price }) => {
  const { cartItem, items, setCartItem } = React.useContext(CartContext);

  const [click, setClick] = React.useState(true);
  const onClickButton1 = (id) => {
    const findItem = items.find((obj) => obj.id === id);
    axios.post("https://639c95a242e3ad6927364e55.mockapi.io/cart", findItem);
    setClick(!click);
  };
  console.log(cartItem);
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
