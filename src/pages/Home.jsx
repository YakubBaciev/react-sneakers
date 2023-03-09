import React from "react";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchSneakers } from "../redux/slices/cartSlice";

const Home = () => {
  const { items, status } = useSelector((state) => state.cartSlice);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const dispatch = useDispatch();

  const getSneakers = () => {
    dispatch(fetchSneakers({ searchValue }));
  };

  React.useEffect(() => {
    getSneakers();
  }, [searchValue]);
  return (
    <>
      <div className="tittle">
        <h1>Все кроссовки</h1>
        <Search />
      </div>
      <div className="conteiner">
        {status === "error" ? (
          <div>
            <h1>Произошла ошибка</h1>
            <h1>Повторите попытку позже</h1>
          </div>
        ) : status === "loading" ? (
          [...Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : (
          items.map((obj) => <Card {...obj} key={obj.id} />)
        )}
      </div>
    </>
  );
};

export default Home;
