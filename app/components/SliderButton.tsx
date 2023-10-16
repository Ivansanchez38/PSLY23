import React, { useState } from "react";
import { icons } from "../data/icons";

type SliderButtonType = {
  arrowIcon?: string;
  clickPrev?: () => void;
  clickNext?: () => void;
  heroButton?: boolean;
  autoPlay?: boolean;
  setAutoPlay?: (value: boolean) => void;
};

const SliderButton: React.FC<SliderButtonType> = ({
  arrowIcon,
  clickPrev,
  clickNext,
  heroButton,
  autoPlay,
  setAutoPlay,
}) => {
  const buttonPosition = arrowIcon === "previous" ? "left-0" : "right-0";

  const playPause: () => void = () => {
    setAutoPlay!(!autoPlay);
  };

  return heroButton ? (
    <div className="block select-none">
      <div className="absolute z-50 -bottom-30 bg-[#fffef2] w-[99%]">
        <div className="pt-4 flex justify-center space-x-6 fill-black opacity-70">
          <button className="h-[14px]" onClick={clickPrev}>
            {icons[0].prev}
          </button>
          <button className="h-[14px]" onClick={clickNext}>
            {icons[0].next}
          </button>
          <button className="opacity-70" onClick={playPause}>
            {autoPlay ? icons[0].pause : icons[0].play}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`bg-[#333] fill-white px-9 py-7 absolute top-1/2 transform -translate-y-1/2 flex items-center z-50 ${buttonPosition}`}
    >
      {arrowIcon === "previous" ? icons[0].prev : icons[0].next}
    </div>
  );
};

export default SliderButton;