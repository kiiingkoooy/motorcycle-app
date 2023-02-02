import React, { useContext, useState } from "react";
import { Context } from "../store/Store";

export default function Card(props) {
  //const { itemCart, setItemCart } = useContext(Context);
  // const [itemCart, setItemCart] = useState([]);

  // const addToCartHandler = (id, price, model) => {    
  //   let cart = [{ id: id, model: model, price: price }];
  //   setItemCart([...itemCart, cart]);
    
  // };


  let models = props.data.map((data) => {
    return (
      <div key={data.id}>
        <p className="text-[150px] font-bold">{data.model}</p>
        <p className="text-[40px] underline italic font-semibold">
          {data.brand}
        </p>
        <p className="text-[20px] italic font-semibold">{data.engine}</p>
        <p className="text-[20px] italic font-semibold">{data.engine_Type}</p>
        <p className="text-[20px] italic font-semibold">
          {data.fuel_Capacity} Liters
        </p>
        <p className="text-[20px] italic font-semibold">{data.price}</p>
        <button
          className="flex mx-auto border-8 bg-blue-600 border-blue-600 rounded items-center text-white px-20 py-1 mt-6"
          onClick={() => props.addToCartHandler(data.id, data.price, data.model)}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div className="justify-center items-center mx-10 my-10">
      <div className="w-[70%] mx-auto">
        <img src={props.imgs} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">{models}</div>
      </div>
    </div>
  );
}
