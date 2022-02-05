import React, { useState } from "react";
import ownland from "../img/ownland.png";

function OwnLand() {
  const [tab, setTab] = useState(1);
  return (
    <div className="pl-[100px] flex gap-[137px] w-full">
      <div className="w-[681px] flex flex-shrink-0 flex-col">
        <span className="w-full text-[64px] text-[#074EE8] font-bold  tracking-tighter leading-[6rem]">
          CREATE ON YOUR{" "}
          <span className="text-[120px] text-[#074EE8] font-extrabold">
            OWN LAND
          </span>
        </span>
        <span className="text-2xl text-black">
          Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain
          for digital scarcity, security, and authenticity. They are unique,
          indivisible, and non-interchangeable — allowing true digital ownership
          of in-game assets.
        </span>
        <span className="flex gap-10 mt-[50px]">
          <button
            className={
              ` text-white rounded-[75px] text-center w-[261px] h-[75px] text-4xl font-semibold ` +
              (tab === 1 ? "bg-[#074EE8]" : "bg-[#F8C614] dynamicTrans")
            }
            onClick={() => setTab(1)}
          >
            Buy Land
          </button>
          <button
            className={
              ` text-white rounded-[75px] text-center w-[261px] h-[75px] text-4xl font-semibold ` +
              (tab === 2 ? "bg-[#074EE8]" : "bg-[#F8C614] dynamicTrans")
            }
            onClick={() => setTab(2)}
          >
            See Map
          </button>
        </span>
      </div>
      <div className="w-full bg-white p-10">
        <img src={ownland} alt="ownland" />
      </div>
    </div>
  );
}

export default OwnLand;
