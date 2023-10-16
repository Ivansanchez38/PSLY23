import React from "react";
import { icons } from "../data/icons";

type SliderButtonType = {
  arrowIcon?: string;
  clickPrev?: () => void;
  clickNext?: () => void;
  heroButton?: boolean;
};

const SliderButton: React.FC<SliderButtonType> = ({
  arrowIcon,
  clickPrev,
  clickNext,
  heroButton,
}) => {
  const buttonPosition = arrowIcon === "previous" ? "left-0" : "right-0";

  return heroButton ? (
    <div className="block select-none">
    <div className="absolute z-50 -bottom-30 bg-[#fffef2] w-[99%]">
      <div className="pt-4 flex justify-center space-x-6 fill-black opacity-70">
          <div onClick={clickPrev}>{icons[0].prev}</div>
          <div onClick={clickNext}>{icons[0].next}</div>
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
