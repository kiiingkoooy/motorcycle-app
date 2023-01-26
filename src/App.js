import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/category" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
