import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import MotorPage from "./pages/MotorPage";
import Products from "./pages/Products";
import Store from "./store/Store";

function App() {
  const [itemCart, setItemCart] = useState([]);

  const addToCartHandler = (id, price, model) => {    
    let cart = [{ id: id, model: model, price: price }];
    setItemCart([...itemCart, cart]);
  };  
  return (
    <div className="App">
      <Header />
      <Store>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryName" element={<Category />} />
          <Route
            path="/products/:categoryName/:motorName"
            element={<MotorPage addToCartHandler={addToCartHandler}/>}
          />
          <Route path="/cart" element={<Cart itemCart={itemCart}/>} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
