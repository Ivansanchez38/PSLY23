import React from "react";
import { icons } from "../data/icons";

type ButtonProps = {
  text: string;
  hero?: boolean;
  index?: number;
  tabIndex?: number;
  sliderButton?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  hero = false,
  index,
  tabIndex,
  sliderButton,
}) => {
  const heroSlide = (hero && index === 0) || index === 1;

  return (
    <div
      className={`mt-[30px] min-w-md ${
        sliderButton
          ? "p-0"
          : `p-4 border border-solid ${
              heroSlide
                ? "border-white hover:bg-white hover:text-black"
                : "hover:bg-[#333] hover:text-[#fffef2] hover:border-[#333] border-[rgba(51,51,51,0.2)]"
            }`
      } w-4/5 sm:w-[60%] transition-colors duration-300 ease-out group`}
    >
      <a
        href="#"
        className={`flex items-center ${
          sliderButton ? "space-x-1" : "justify-between"
        }`}
        tabIndex={tabIndex}
      >
        <span
          className={`${
            sliderButton ? "text-base opacity-95" : "text-sm font-semibold"
          }`}
        >
          {text}
        </span>
        <div
          className={`${
            sliderButton
              ? "opacity-80"
              : heroSlide
              ? "fill-white group-hover:fill-black"
              : "fill-black group-hover:fill-[#fffef2]"
          }`}
        >
          {icons[0].rightArrow}
        </div>
      </a>
    </div>
  );
};

export default Button;
