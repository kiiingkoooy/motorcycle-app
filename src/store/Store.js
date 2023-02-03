import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const Context = React.createContext();
export const ContextUpdate = React.createContext();
export const LoadingContext = React.createContext();

export function useCart() {
  return useContext(Context);
}

export function useCartUpdate() {
  return useContext(ContextUpdate);
}

export function useLoader() {
  return useContext(LoadingContext);
}

const Store = ({ children }) => {
  const navigate = useNavigate()
  const [itemCart, setItemCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCartHandler = (id, price, model) => {
    let cart = { id, model, price };
    let carts;

    //console.log(itemCart.map(item => item.id) === cart.id);
    itemCart.map((item) => (carts = item.id));
    if (carts === cart.id) {
      return toast.error('This Item has already been Added to the Cart');
    }
    setItemCart([...itemCart, cart]);

    //setItemCart((prevState) => prevState.id !== "" && [...prevState, cart]);
  };
 
  return (
    <Context.Provider value={{ itemCart, setItemCart }}>
      <ContextUpdate.Provider value={addToCartHandler}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {children}
        </LoadingContext.Provider>
      </ContextUpdate.Provider>
    </Context.Provider>
  );
};

export default Store;
