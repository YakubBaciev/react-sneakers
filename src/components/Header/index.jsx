import React from "react";
import styles from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOpenCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const openCart = useSelector((state) => state.cartSlice.openCart);

  return (
    <header className={styles.root}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img
            className={styles.img}
            width={40}
            height={40}
            src="https://github.com/Archakov06/react-sneakers/blob/master/public/img/logo.png?raw=true"
            alt="logo"
          />
        </Link>
        <div className={styles.info}>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li>
          <Link to="/cart">
            <img
              width={18}
              height={18}
              src="https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/cart.svg"
              alt="cart"
            />
          </Link>
          <span>12 999 p.</span>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/user.svg"
            alt="user"
          />
        </li>
      </ul>
    </header>
  );
};
export default Header;
