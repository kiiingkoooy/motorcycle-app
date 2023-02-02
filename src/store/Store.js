import React, { useState } from "react";

const initialState = {
  id: "",
  model: "",
  price: 0,
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [itemCart, setItemCart] = useState(initialState);

  return (
    <Context.Provider value={{ itemCart, setItemCart }}>
      {children}
    </Context.Provider>
  );
};

export default Store;
