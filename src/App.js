import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Search from "./components/Search";
import axios from "axios";

export const CartContext = React.createContext("");
const items = [
  {
    id: 0,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/1.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 12999,
  },
  {
    id: 1,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/2.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Air Max 270",
    price: 15600,
  },
  {
    id: 2,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/3.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 8499,
  },
  {
    id: 3,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/4.jpg?raw=true",
    tittle: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
  },
  {
    id: 4,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/5.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Kyrie 7",
    price: 5344,
  },
  {
    id: 5,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/6.jpg?raw=true",
    tittle: "Мужские кроссовки Nike LeBron 18",
    price: 18900,
  },
  {
    id: 6,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/7.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 14999,
  },
  {
    id: 7,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/8.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 12999,
  },
  {
    id: 8,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/9.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 13999,
  },
  {
    id: 9,
    imageUrl:
      "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/10.jpg?raw=true",
    tittle: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 11999,
  },
];

function App() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [openCart, setOpenCart] = React.useState(true);
  const [cartItem, setCartItem] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  console.log(totalPrice);

  React.useEffect(() => {
    axios
      .get("https://639c95a242e3ad6927364e55.mockapi.io/cart")
      .then((res) => {
        setCartItem(res.data);
      });
  }, []);

  return (
    <CartContext.Provider
      value={{
        openCart,
        setOpenCart,
        cartItem,
        setCartItem,
        items,
        setTotalPrice,
        totalPrice,
        searchValue,
        setSearchValue,
      }}
    >
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
    </CartContext.Provider>
  );
}

export default App;
