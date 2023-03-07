import React from "react";
import Card from "../components/Card";
import Cart from "../components/CartBlock";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchSneakers } from "../redux/slices/cartSlice";

const Home = () => {
  const { items } = useSelector((state) => state.cartSlice);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const dispatch = useDispatch();

  const getSneakers = () => {
    dispatch(fetchSneakers());
  };

  React.useEffect(() => {
    getSneakers();
  }, []);
  return (
    <>
      <div className="tittle">
        <h1>Все кроссовки</h1>
        <Search />
      </div>
      <div className="conteiner">
        {items
          .filter((obj) =>
            obj.tittle.toUpperCase().includes(searchValue.toUpperCase())
          )
          .map((obj) => (
            <Card {...obj} key={obj.id} />
          ))}
      </div>
    </>
  );
};

export default Home;
