import React from "react";
import ReactPlayer from "react-player";

function CommingSoonContent() {
  return (
    <div className="w-full h-[800px] mx-100 bg-white flex gap-[35px] mt-2">
      <div className="flex flex-col w-[480px] mx-[30px]">
        <div className="relative w-full">
          <span className="text-[288px] text-[#F8C614] font-bold">
            2
            <span className="text-[64px] text-[#074EE8] font-bold absolute top-[11rem] left-4">
              Buy Build
            </span>
          </span>
        </div>
        <div className="w-full max-h-[414px] scrollSet overflow-y-scroll">
          <p className="text-black text-2xl ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            eros blandit, finibus nisi non, semper nunc. Quisque rhoncus eros at
            ipsum porta, ut placerat eros elementum. Donec cursus arcu a
            efficitur condimentum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vel arcu sit amet arcu molestie sagittis.
            Integer interdum dui volutpat, aliquet tellus gravida, porttitor
            lorem. Nam consectetur enim non congue Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas in eros blandit, finibus nisi
            non, semper nunc. Quisque rhoncus eros at ipsum porta, ut placerat
            eros elementum. Donec cursus arcu a efficitur condimentum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel arcu sit
            amet arcu molestie sagittis. Integer interdum dui volutpat, aliquet
            tellus gravida, porttitor lorem. Nam consectetur enim non congue
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=POUl8dZa1L8"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}

export default CommingSoonContent;
