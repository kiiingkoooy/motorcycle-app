import React from "react";
import Adv from "../Motmot_vids/Adventure/Gs1250pic.jpg";
import SuperSport from "../Motmot_vids/Supersport/r1pic.jpg";
import Sport from "../Motmot_vids/Sports/duke390pic.jpg";
import { useNavigate } from "react-router";


export default function Products() {
  const navigate = useNavigate();

  const clickHandler = (event) => {
    let category = event.target.textContent;

    if (category === "Adventure") {
      navigate(`/products/adventure`, {
        state: {
          category: category,
        },
      });
    }
    if (category === "Supersport") {
      navigate(`/products/supersport`, {
        state: {
          category: category,
        },
      });
    }
    if (category === "Sport") {
      navigate(`/products/sport`, {
        state: {
          category: category,
        },
      });
    }
  };

  const imgStyle = "w-full mx-auto my-3";
  return (
    <div className="mx-10 max-w-10xl">
      <div className="flex justify-center mx-auto mt-[7%]">
        <p className="font-bold text-blue-900 text-[50px] justify-center">
          Choose your Category
        </p>
      </div>
      <div className="grid min-[1600px]:grid-cols-3 min-[900px]:grid-cols-2 min-[100px]:grid-cols-1 gap-4 items-center justify-center mx-auto mt-[5%]">
        <div className="flex relative items-center hover:opacity-50">
          <img className={imgStyle} src={Adv} alt=""></img>
          <div className="absolute text-[400%] text-white font-bold min-[1700px]:left-[18%] min-[1300px]:left-[22%] min-[1200px]:left-[18%] min-[1000px]:left-[12%] min-[900px]:left-[6%] min-[700px]:left-[18%] min-[600px]:left-[16%] min-[550px]:left-[12%] left-[5%] opacity-0 hover:opacity-100 cursor-pointer uppercase">
            <p className="" onClick={clickHandler}>
              Adventure
            </p>
          </div>
        </div>
        <div className="flex relative items-center hover:opacity-50">
          <img className={imgStyle} src={SuperSport} alt="" />
          <div className="absolute text-[400%] text-white font-bold min-[1700px]:left-[18%] min-[1600px]:left-[14%] min-[1300px]:left-[22%] min-[1200px]:left-[18%] min-[1000px]:left-[12%] min-[900px]:left-[2%] min-[700px]:left-[18%] min-[600px]:left-[16%] min-[550px]:left-[12%] opacity-0 hover:opacity-100 cursor-pointer uppercase">
            <p className="" onClick={clickHandler}>
              Supersport
            </p>
          </div>
        </div>
        <div className="flex relative items-center hover:opacity-50">
          <img className={imgStyle} src={Sport} alt="" />
          <div className="absolute text-[400%] text-white font-bold min-[1300px]:left-[36%] min-[1200px]:left-[34%] min-[1000px]:left-[32%] min-[900px]:left-[28%] min-[700px]:left-[35%] min-[600px]:left-[32%] min-[550px]:left-[32%] left-[25%] opacity-0 hover:opacity-100 cursor-pointer uppercase">
            <p className="" onClick={clickHandler}>
              Sport
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
