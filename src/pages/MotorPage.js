import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../components/Card";

export default function MotorPage() {
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
          category: responseData[key]?.Category,
          engine: responseData[key].Engine,
          engine_Type: responseData[key].Engine_Type,
          fuel_Capacity: responseData[key].Fuel_Capacity,
          model: responseData[key].Model,
          price: responseData[key].Price,
        });
      }
      setMotorType(loadedMotor);
    };
    fetchMotor();
  }, [setMotorType]);

  let sample = location.state.category;

  

  let renderCategory = motorType
    .filter((motor) => motor.category === sample)
    .map((motor) => motor);

  return (
    <div>
      <div className="">
        <Card data={renderCategory}/>        
      </div>
    </div>
  );
}
