import React, { useState } from "react";
import CommingSoonContent from "./CommingSoonContent";

function CommingSoon() {
  const [tab, setTab] = useState(2);
  return (
    <div className="mb-[150px] mx-[100px]">
      <div className="text-[#074EE8] w-full text-center font-bold text-[120px] tracking-tighter">
        COMMING SOON
      </div>
      <div className="flex gap-2">
        <button
          className={
            `w-[340px] h-[100px] items-center bg-white text-2xl font-semibold flex justify-center border-b-2   ` +
            (tab === 1
              ? "text-[#074EE8] border-[#074EE8]"
              : " text-black text-opacity-40 dynamicTrans border-black border-opacity-40")
          }
          onClick={() => setTab(1)}
        >
          March 2022
        </button>
        <button
          className={
            `w-[340px] h-[100px] items-center bg-white text-2xl font-semibold flex justify-center border-b-2   ` +
            (tab === 2
              ? "text-[#074EE8] border-[#074EE8]"
              : " text-black text-opacity-40 dynamicTrans border-black border-opacity-40")
          }
          onClick={() => setTab(2)}
        >
          July 2022
        </button>
        <button
          className={
            `w-[340px] h-[100px] items-center bg-white text-2xl font-semibold flex justify-center border-b-2   ` +
            (tab === 3
              ? "text-[#074EE8] border-[#074EE8]"
              : " text-black text-opacity-40 dynamicTrans border-black border-opacity-40")
          }
          onClick={() => setTab(3)}
        >
          September 2022
        </button>
        <button
          className={
            `w-[340px] h-[100px] items-center bg-white text-2xl font-semibold flex justify-center border-b-2   ` +
            (tab === 4
              ? "text-[#074EE8] border-[#074EE8]"
              : " text-black text-opacity-40 dynamicTrans border-black border-opacity-40")
          }
          onClick={() => setTab(4)}
        >
          December 2022
        </button>
        <button
          className={
            `w-[340px] h-[100px] items-center bg-white text-2xl font-semibold flex justify-center border-b-2   ` +
            (tab === 5
              ? "text-[#074EE8] border-[#074EE8]"
              : " text-black text-opacity-40 dynamicTrans border-black border-opacity-40")
          }
          onClick={() => setTab(5)}
        >
          January 2022
        </button>
      </div>
      <CommingSoonContent />
    </div>
  );
}

export default CommingSoon;
