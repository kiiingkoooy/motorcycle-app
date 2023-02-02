import React from "react";

export default function CardCart({ itemCart }) {
  let items = itemCart.map((item) => {
    console.log(item);
    return (
      <div key={item[0]?.id} className="flex border-2 mt-5 space-x-6 text-[30px] font-semibold">
        <p>{item[0]?.model}</p>
        
        <div className="flex text-[30px]">
        <button>+</button>
        <p>1</p>
        <button>-</button>
        </div>
        <p>{item[0]?.price}</p>
        
      </div>
    );
  });
  
  return <div className="mt-20 mx-40">{items}</div>;
  // <div key={itemCart.itemCart[0][0].id} className="w-full mx-auto">
  //   <p>{itemCart.itemCart[0][0].model}</p>
  //   <p>{itemCart.itemCart[0][0].price}</p>
  // </div>
}
