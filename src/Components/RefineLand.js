import React from "react";
import Background from "../img/background.png";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

function RefineLand() {
  const [zoomStyles, handlers] = useImageZoom();

  return (
    <div className="w-full justify-center mt-[62px] mb-[120px] items-center flex flex-col gap-[46px]">
      <div className="flex flex-col gap-2">
        <span className="text-[144px] text-[#074EE8] font-semibold">
          Refined Land
        </span>
        <span className="text-center text-2xl">
          An NFT & Metaverse project with a real life utility
        </span>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-3 mr-2">
          <button className="w-[83px] h-[83px] rounded-full bg-white text-[#074EE8] dynamicTrans">
            <FaTwitter className="w-full text-[35px] self-center" />
          </button>
          <button className="w-[83px] h-[83px] rounded-full bg-white text-[#074EE8] dynamicTrans">
            <FaFacebookSquare className="w-full text-[35px] self-center" />
          </button>
        </div>
        <div className="relative">
          <div className="preview">
            <img
              src={Background}
              alt=""
              style={{ ...zoomStyles }}
              onClick={handlers.resetZoom}
            />
          </div>
          <div className="flex flex-col gap-3 absolute top-0 right-0">
            <button onClick={handlers.zoomIn}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 38.5C11.3394 38.4894 3.51061 30.6606 3.5 21V20.65C3.69238 11.033 11.6105 3.37396 21.2287 3.50157C30.8468 3.62919 38.559 11.4956 38.4961 21.1144C38.4333 30.7332 30.619 38.4981 21 38.5ZM12.25 19.25V22.75H19.25V29.75H22.75V22.75H29.75V19.25H22.75V12.25H19.25V19.25H12.25Z"
                  fill="#074EE8"
                />
              </svg>
            </button>
            <button onClick={handlers.zoomOut}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 38.5C11.3394 38.4894 3.51061 30.6606 3.5 21V20.65C3.69238 11.033 11.6105 3.37396 21.2287 3.50157C30.8468 3.62919 38.559 11.4956 38.4961 21.1144C38.4333 30.7332 30.619 38.4981 21 38.5ZM12.25 19.25V22.75H29.75V19.25H12.25Z"
                  fill="#074EE8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function useImageZoom(maxZoomLevel = 5) {
  const minZoomLevel = 1;

  const [zoomLevel, setZoomLevel] = React.useState(minZoomLevel);

  function zoomIn() {
    setZoomLevel((zoomLevel) =>
      zoomLevel < maxZoomLevel ? zoomLevel + 1 : zoomLevel
    );
  }

  function zoomOut() {
    setZoomLevel((zoomLevel) =>
      zoomLevel > minZoomLevel ? zoomLevel - 1 : minZoomLevel
    );
  }

  function resetZoom() {
    setZoomLevel(minZoomLevel);
  }

  const zoomStyles = {
    transform: `scale(${zoomLevel})`,
  };

  const handlers = {
    zoomIn,
    zoomOut,
    resetZoom,
  };

  return [zoomStyles, handlers];
}

export default RefineLand;
