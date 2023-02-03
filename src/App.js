import { Navigate, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import MotorPage from "./pages/MotorPage";
import Products from "./pages/Products";
import Store from "./store/Store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Store>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryName" element={<Category />} />
          <Route
            path="/products/:categoryName/:motorName"
            element={<MotorPage />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Store>
    </div>
  );
}

export default App;
