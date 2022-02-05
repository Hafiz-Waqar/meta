import React from "react";
import W from "../img/W.png";
import Red from "../img/Red.png";
import Paw from "../img/Paw.png";
import Bee from "../img/Bee.png";

function LogoBar() {
  return (
    <div className="my-[120px] w-full h-[288px] bg-[#F8C614] flex items-center justify-between ">
      <span className="border-r h-[200px] ml-[120px]"></span>
      <img
        src={W}
        alt="W"
        className="w-[120px] h-[120px] mx-[120px] dynamicTrans"
      />
      <span className="border-r h-[200px]"></span>
      <img
        src={Red}
        alt="Red"
        className="w-[120px] h-[120px] mx-[120px] dynamicTrans"
      />
      <span className="border-r h-[200px]"></span>
      <img
        src={Paw}
        alt="Paw"
        className="w-[120px] h-[120px] mx-[120px] dynamicTrans"
      />
      <span className="border-r h-[200px]"></span>
      <img
        src={Bee}
        alt="Bee"
        className="w-[120px] h-[120px] mx-[120px] dynamicTrans"
      />
      <span className="border-r h-[200px] mr-[120px]"></span>
    </div>
  );
}

export default LogoBar;
