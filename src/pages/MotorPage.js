import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../components/Card";

export default function MotorPage({addToCartHandler}) {
  const location = useLocation();

  const [motorType, setMotorType] = useState([]);

  useEffect(() => {
    const fetchMotor = async () => {
      const response = await fetch(
        "https://motor-http-default-rtdb.asia-southeast1.firebasedatabase.app/Motor.json"
      );

      const responseData = await response.json();

      const loadedMotor = [];

      for (const key in responseData) {
        loadedMotor.push({
          id: key,
          engine: responseData[key].Engine,
          engine_Type: responseData[key].Engine_Type,
          fuel_Capacity: responseData[key].Fuel_Capacity,
          model: responseData[key].Model,
          price: responseData[key].Price,
          imgName: responseData[key].imgName,
          brand: responseData[key].Brand,
        });
      }
      setMotorType(loadedMotor);
    };
    fetchMotor();
  }, [setMotorType]);

  let modelName = location.state?.name;
  let imgUrl = location.state?.imgs;

  let renderCategory = motorType
    .filter((motor) => motor.imgName === modelName)
    .map((motor) => motor);

  return (
    <div>
      <div className="">
        <Card data={renderCategory} imgs={imgUrl} addToCartHandler={addToCartHandler}/>
      </div>
    </div>
  );
}
