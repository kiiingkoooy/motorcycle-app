import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MotorPage from "./MotorPage";
//import imgUrls from "../resources/imageUrls.json";
import AfricaTwin from "../Motmot_vids/Adventure/AfricaTwinPic.jpg";
import Gs1250 from "../Motmot_vids/Adventure/Gs1250pic.jpg";
import R1 from "../Motmot_vids/Supersport/r1pic.jpg";
import ZH2 from "../Motmot_vids/Supersport/zh2pic.jpg";
import SR250 from "../Motmot_vids/Sports/250srpic.jpg";
import Duke390 from "../Motmot_vids/Sports/duke390pic.jpg";
import R3 from "../Motmot_vids/Sports/r3pic.jpg";

export default function Category() {
  const imgs = [
    { name: "AfricaTwin", url: AfricaTwin },
    { name: "Gs1250", url: Gs1250 },
    { name: "R1", url: R1 },
    { name: "ZH2", url: ZH2 },
    { name: "SR250", url: SR250 },
    { name: "Duke390", url: Duke390 },
    { name: "R3", url: R3 },
  ];
  //const imgJson = imgUrls;
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
          category: responseData[key].Category,
          model: responseData[key].Model,
          imgName: responseData[key].imgName,
        });
      }
      setMotorType(loadedMotor);
    };
    fetchMotor();
  }, [setMotorType]);

  //console.log(motorType);

  let category = location.state.category;

  let renderCategory = motorType
    .filter((motor) => motor.category === category)
    .map((motor) => motor);

  // let imgUrls = [];
  // for (let i = 0; i < renderCategory.length; i++) {
  //   imgUrls.push(renderCategory[i].imgName);
  // }
  //console.log(renderCategory);

  // let imgUrl = imgs
  //   .filter((motors) => motors === imgUrls)
  //   .map((motor) => motor);

  //let imgUrl = imgs.map((url) => url.url);
  // let imgUrl = imgs
  //   .filter((motor) => motor.category === category)
  //   .map((motor) => motor);
  // console.log(imgUrl);

  //console.log(renderCategory.map((model) => model.model));

  // for(let i=0;i<imgJson.length;i++){
  //   console.log(imgJson[i].url)
  // }

  let imgUrl = renderCategory.map((model) => {
    for (let i = 0; i < imgs.length; i++) {
      if (model.imgName === imgs[i].name) {
        return imgs[i].url;
      }
    }
  });

  //console.log(imgJson.name);

  //console.log(imgUrl.length);

  const clickHandler = (event) => {
    
  };

  return (
    <div className="mx-10 max-w-10xl">
      <div className="flex justify-center mx-auto mt-[7%]">
        <p className="font-bold text-blue-900 text-[50px] justify-center">
          Choose your Ride
        </p>
      </div>
      <div className="grid min-[1100px]:grid-cols-2 min-[900px]:grid-cols-1 gap-4 items-center justify-center mx-auto mt-[5%]">
        <div className="flex relative items-center hover:opacity-50">
          <img className="w-full" src={imgUrl[0]} alt="asd" />;
          <div className="absolute text-[1000%] text-white font-bold min-[1500px]:left-[40%] min-[1300px]:left-[35%] min-[900px]:left-[40%] min-[700px]:left-[37%] min-[550px]:left-[32%] left-[28%] opacity-0 hover:opacity-100 cursor-pointer ">
            <p className="" onClick={clickHandler}>
              {renderCategory[0]?.model}
            </p>
          </div>
        </div>
        <div className="flex relative items-center hover:opacity-50">
          <img className="w-full" src={imgUrl[1]} alt="asd" />;
          <div className="absolute text-[1000%] text-white font-bold min-[1500px]:left-[34%] min-[1300px]:left-[25%] min-[900px]:left-[35%] min-[700px]:left-[32%] min-[550px]:left-[25%] left-[14%] opacity-0 hover:opacity-100 cursor-pointer ">
            <p className="" onClick={clickHandler}>
              {renderCategory[1]?.model}
            </p>
          </div>
        </div>
        {imgUrl.length > 2 && (
          <div className="flex relative items-center hover:opacity-50">
            <img className="w-full" src={imgUrl[2]} alt="asd" />;
            <div className="absolute text-[1000%] text-white font-bold min-[1500px]:left-[34%] min-[1300px]:left-[25%] min-[900px]:left-[35%] min-[700px]:left-[32%] min-[550px]:left-[25%] left-[14%] opacity-0 hover:opacity-100 cursor-pointer">
              <p className="" onClick={clickHandler}>
                {renderCategory[2]?.model}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
