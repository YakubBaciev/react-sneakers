import React from "react";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { debounce } from "lodash";

const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const inputRef = React.useRef("");

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.img1} src="/img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
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
