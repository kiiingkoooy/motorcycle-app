import React from "react";
import useCart from "../store/Store";

export default function CardCart({ itemCart, setItemCart }) {
  const removeHandler = (id) => {
    const arr = itemCart.filter((item) => item.id !== id);
    setItemCart(arr);
  };

  const changeHandler = (item, d) => {
    const index = itemCart.indexOf(item);
    const arr = itemCart;
    arr[index].amount += d;

    if (arr[index].amount === 0) {
      arr[index].amount = 1;
      setItemCart([...arr]);
    }
  };



  let items = itemCart.map((item) => {
    return (
      <div
        key={item.id}
        className="flex border-2 items-center mt-5 space-x-6 font-semibold justify-between py-1"
      >
        <p className="text-[30px]">{item.model}</p>
        <div className="flex space-x-10">
          <div className="flex text-[15px]">
            <button
              className="bg-white px-1.5 border-2 rounded-lg font-bold"
              onClick={() => changeHandler(item, 1)}
            >
              +
            </button>
            <p className="mx-2">1</p>
            <button
              className="bg-white px-2 border-2 rounded-lg font-bold"
              onClick={() => changeHandler(item, -1)}
            >
              -
            </button>
          </div>
          <p>₱{item.price}</p>
          <button
            className="flex text-[15px] items-center bg-red-400 px-5 rounded-lg"
            onClick={() => removeHandler(item.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    );
  });

  let sumItems = itemCart.length > 0 ? itemCart
    .map((item) => item.price.replace(/,/g, ""))
    .reduce((total, price) => parseInt(total) + parseInt(price)) : 0

  //console.log(itemCart.length);

  return (
    <div>
      <div className="mt-20 sm:mx-10 md:mx-[20%] lg:mx-[25%] 2xl:mx-[30%] ">
        {items}
      </div>
      <div className="flex sm:mx-10 md:mx-[20%] lg:mx-[25%] 2xl:mx-[30%] float-right space-x-6">
        <p className="font-bold text-[30px]">Total:</p>
        <p className="font-bold text-[30px]">
          ₱{sumItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
}
