import React from "react";
import foot from "../img/foot.png";
import Basketball from "../img/Basketball.png";
import Football from "../img/Football.png";
import Carousel from "react-elastic-carousel";

function PLAY2EARN() {
  return (
    <div className="my-[150px]">
      <div className="text-[#074EE8] w-full text-center font-bold text-[120px] tracking-tighter">
        PLAY2EARN GAMES
      </div>
      <div className="w-full h-[800px]">
        <div className="relative">
          <img src={foot} alt="" className="absolute left-[100px]" />
          <img src={Basketball} alt="" className="absolute top-[25rem]" />
          <div className="w-[829px] h-[425px] bg-white absolute right-[100px] top-[7rem]">
            <Carousel className="player">
              <div className="w-full flex flex-col gap-5 p-10">
                <span className="text-[#074EE8] w-full font-bold text-[48px] tracking-tight">
                  Football
                </span>
                <span className="text-2xl text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in eros blandit, finibus nisi non, semper nunc.
                  Quisque rhoncus eros at ipsum porta, ut placerat eros
                  elementum. Donec cursus arcu a efficitur condimentum. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <button className="bg-[#F8C614] text-white rounded-[75px] text-center w-[230px] h-[75px] text-2xl font-semibold tracking-tighter dynamicTrans">
                  Learn more
                </button>
              </div>
            </Carousel>
          </div>
          <img
            src={Football}
            alt="Football"
            className="absolute right-0 top-[-100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default PLAY2EARN;
