import React from "react";
import Logo from "../img/metalogoblack.png";

function Header() {
  return (
    <div className="flex justify-between items-center px-[100px] py-6">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="text-4xl flex gap-10 text-black font-semibold">
        <button className="dynamicTrans hover:text-[#074EE8]">Map</button>
        <button className="dynamicTrans hover:text-[#074EE8]">Buy Land</button>
        <button className="dynamicTrans hover:text-[#074EE8]">About</button>
      </div>
      <button className="bg-[#074EE8] w-[226px] h-[75px] text-4xl font-semibold text-white rounded-[75px] hover:bg-[#F8C614] dynamicTrans">
        Connect
      </button>
    </div>
  );
}

export default Header;
