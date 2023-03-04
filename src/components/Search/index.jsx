import React from "react";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";

const Search = () => {
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const dispatch = useDispatch();

  const inputRef = React.useRef("");

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.img1} src="/img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
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
