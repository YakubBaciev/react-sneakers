import React from "react";
import Card from "../components/Card";
import Cart from "../components/CartBlock";
import Search from "../components/Search";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../redux/slices/cartSlice";

const Home = () => {
  const { openCart, items } = useSelector((state) => state.cartSlice);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const dispatch = useDispatch();

  const getSneakers = async () => {
    await axios
      .get("https://639c95a242e3ad6927364e55.mockapi.io/sneakers")
      .then((res) => {
        dispatch(setItems(res.data));
      });
  };

  React.useEffect(() => {
    try {
      getSneakers();
    } catch (error) {
      console.log(error);
    }
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
