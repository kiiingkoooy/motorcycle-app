import React from "react";

export default function Card(props) { 

  let models = props.data.map((data) => {
    return (
      <div key={data.id}>
        <p>{data.model}</p>
        <p>{data.engine}</p>
        <p>{data.engine_Type}</p>
        <p>{data.fuel_Capacity}</p>
        <p>{data.model}</p>
        <p>{data.price}</p>
      </div>
    );
  });

  return (
    <div className="justify-center items-center mx-10">
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="flex items-center justify-center">
        {models}
        <p className=" mx-0 px-10"></p>
      </div>
    </div>
  );
}
