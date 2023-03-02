import React from "react";
import styles from "./Search.module.scss";
import { CartContext } from "../../App";

const Search = () => {
  const inputRef = React.useRef("");
  const { searchValue, setSearchValue } = React.useContext(CartContext);

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.img1} src="/img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
      ></input>
      <img
        onClick={onClickClear}
        className={styles.img2}
        src="/img/plus.svg"
        alt="clear"
      />
    </div>
  );
};

export default Search;
