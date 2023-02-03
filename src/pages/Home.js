import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import AfricaTwin from "../Motmot_vids/Adventure/AfricaTwin.mp4";
import Zh2 from "../Motmot_vids/Supersport/ZH2.mp4";
import r3 from "../Motmot_vids/Sports/R3.mp4";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useLoader } from "../store/Store";

export default function Home() {
  const { loading, setLoading } = useLoader();
  const navigate = useNavigate();
  const videoProperties = [
    {
      id: 1,
      title: "Africa Twin",
      src: AfricaTwin,
      category: "Adventure",
    },
    {
      id: 2,
      title: "ZH2",
      src: Zh2,
      category: "Supersport",
    },
    {
      id: 3,
      title: "R3",
      src: r3,
      category: "Sport",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 500);
  }, []);

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

  return (
    <div className="mx-auto mt-[7%] items-center grid !grid-cols-1">
      {loading ? <Spinner /> : ''}
      <h1 className="flex mx-auto justify-center text-blue-900 text-[50px] font-bold">
        The ride
      </h1>
      {videoProperties.map((videoObj) => {
        return (
          <div className="mx-auto justify-center mt-9" key={videoObj.id}>
            <ReactPlayer
              url={videoObj.src}
              pip={true}
              controls={true}
              playing={true}
              loop={true}
              muted={true}
            />
            <button
              className="flex mx-auto justify-center opacity-70 text-[25px] font-semibold bg-slate-300 text-white rounded-lg py-2 px-4"
              onClick={clickHandler}
            >
              {videoObj.category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
