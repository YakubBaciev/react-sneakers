import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Search from "./components/Search";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCartItem } from "./redux/slices/cartSlice";

function App() {
  const { openCart, items } = useSelector((state) => state.cartSlice);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const dispatch = useDispatch();

  const getSneakers = async () => {
    await axios
      .get("https://639c95a242e3ad6927364e55.mockapi.io/cart")
      .then((res) => {
        dispatch(setCartItem(res.data));
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
    <div className="wrapper">
      <Header />
      {openCart ? (
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
      ) : (
        <Cart />
      )}
    </div>
  );
}

export default App;
