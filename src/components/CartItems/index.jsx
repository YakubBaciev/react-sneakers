import styles from "./CartItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { onClickDelete, setCartItem } from "../../redux/slices/cartSlice";

const CartItems = ({ id, imageUrl, price, tittle }) => {
  const cartItem = useSelector((state) => state.cartSlice.cartItem);
  const dispatch = useDispatch();

  const onClickRemove = (id) => {
    dispatch(onClickDelete(id));
  };

  return (
    <div className={styles.root}>
      <img src={imageUrl} alt="sneakers" />
      <p>{tittle}</p>
      <b>{price} р.</b>
      <button onClick={() => onClickRemove(id)} className={styles.buttonDelete}>
        Delete
      </button>
    </div>
  );
};

export default CartItems;
