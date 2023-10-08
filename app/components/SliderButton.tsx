import React from "react";
import { icons } from "../data/icons";

const SliderButton = ({ arrowIcon }: { arrowIcon: string }) => {

  const buttonPosition = arrowIcon === "previous" ? "left-0" : "right-0";

  return (
    <div
      className={`bg-[#333] px-8 py-8 absolute top-1/2 transform -translate-y-1/2 flex items-center z-50 ${buttonPosition}`}
    >
      {arrowIcon === "previous" ? icons[0].prev : icons[0].next}
    </div>
  );
};

export default SliderButton;

