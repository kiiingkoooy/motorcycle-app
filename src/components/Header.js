import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const liStyle =
    "font-bold uppercase py-3 px-3 text-white text-[22px] cursor-pointer";
  const dropDownLiStyle =
    "my-2 px-[25%] py-[5%] hover:bg-gray-200 hover:text-[25px] hover:font-bold cursor-pointer text-[20px] rounded-lg uppercase";
  return (
    <div className="bg-blue-700 border-b shadow-sm top-0 z-40">
      <header className="py-2 px-2">
        <ul className="flex justify-between mr-5 ml-5">
          <li
            className={`${liStyle} ${pathMatchRoute("/") && "text-gray-400"}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`${liStyle} ${
              pathMatchRoute("/products") && "text-gray-400" 
            } peer`}
            onClick={() => navigate("/products")}
          >
            Products
          </li>
          <div
            className="absolute align-left mt-[50px] left-[35.5%] sm:left-[40%] md:left-[42%] lg:left-[46%] hidden peer-hover:flex hover:flex
         w-[160px] flex-col bg-white drop-shadow-lg rounded-xl items-center "
          >
            <Link to='/products/adventure' className={dropDownLiStyle}>Adventure</Link>
            <Link to='/products/supersport' className={dropDownLiStyle}>Supersport</Link>
            <Link to='/products/sport' className={`${dropDownLiStyle} px-20`}>Sport</Link>
          </div>
          <li
            className={`${liStyle} ${
              pathMatchRoute("/cart") && "text-gray-400"
            }`}
            onClick={() => navigate("/cart")}
          >
            Cart
          </li>
        </ul>
      </header>
    </div>
  );
}
