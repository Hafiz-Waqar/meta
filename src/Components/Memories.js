import React, { useState } from "react";
import M1 from "../img/M1.png";
import M2 from "../img/M2.png";
import M3 from "../img/M3.png";
import Carousel from "react-elastic-carousel";

function Memories() {
  const breakPoints = [
    { width: 325, itemsToShow: 1, showArrows: false },
    { width: 768, itemsToShow: 2 },
    { width: 976, itemsToShow: 3 },
  ];
  const [tab, setTab] = useState(1);
  return (
    <div className="px-[100px] w-full">
      <div className="flex w-full justify-between items-end mb-[60px]">
        <div className="flex flex-col text-[#074EE8] tracking-tighter leading-[6rem]">
          <span className="text-[120px] font-bold">Memories</span>
          <span className="text-[64px] font-semibold">from Refined Land</span>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className={
              `w-[247px] text-center text-2xl rounded-[75px] h-[65px] ` +
              (tab === 1
                ? "bg-[#F8C614] text-white"
                : "text-[#111111] text-opacity-30 bg-transparent border dynamicTrans hover:bg-white hover:text-[#F8C614]")
            }
            onClick={() => setTab(1)}
          >
            Business Center
          </button>
          <button
            className={
              `w-[247px] text-center text-2xl rounded-[75px] h-[65px] ` +
              (tab === 2
                ? "bg-[#F8C614] text-white"
                : "text-[#111111] text-opacity-30 bg-transparent border dynamicTrans hover:bg-white hover:text-[#F8C614]")
            }
            onClick={() => setTab(2)}
          >
            Market Square
          </button>
          <button
            className={
              `w-[247px] text-center text-2xl rounded-[75px] h-[65px] ` +
              (tab === 3
                ? "bg-[#F8C614] text-white"
                : "text-[#111111] text-opacity-30 bg-transparent border dynamicTrans hover:bg-white hover:text-[#F8C614]")
            }
            onClick={() => setTab(3)}
          >
            Real Estate
          </button>
        </div>
      </div>
      <div className="flex gap-[30px] items-center w-full justify-center">
        <Carousel breakPoints={breakPoints} className="relative ali">
          <div className="w-[553px] h-[623px] bg-white p-4 dynamicTrans">
            <img src={M1} alt="" className="w-full items-center" />
          </div>
          <div className="w-[553px] h-[623px] bg-white p-4 dynamicTrans">
            <img src={M2} alt="" className="w-full items-center" />
          </div>
          <div className="w-[553px] h-[623px] bg-white p-4 dynamicTrans">
            <img src={M3} alt="" className="w-full items-center" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Memories;
