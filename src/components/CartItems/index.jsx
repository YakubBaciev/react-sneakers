import styles from "./CartItems.module.scss";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/slices/cartSlice";
import axios from "axios";

const CartItems = ({ id, imageUrl, price, tittle }) => {
  const dispatch = useDispatch();

  const onClickDelet = (id) => {
    dispatch(setCartItem((prev) => prev.filter((obj) => obj.id !== id)));
    axios.delete(`https://639c95a242e3ad6927364e55.mockapi.io/cart/${id}`);
  };

  return (
    <div className={styles.root} key={id}>
      <img src={imageUrl} alt="sneakers" />
      <p>{tittle}</p>
      <b>{price} р.</b>
      <button onClick={() => onClickDelet(id)} className={styles.buttonDelete}>
        Delete
      </button>
    </div>
  );
};

export default CartItems;
