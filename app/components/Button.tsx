import React from "react";
import { icons } from "../data/icons";

type ButtonProps = {
  text: string;
}

const Button: React.FC<ButtonProps>  = ({ text }) => {
  return (
    <div className="group border border-solid border-[rgba(51,51,51,0.2)] hover:bg-[#333] hover:text-[#fffef2] hover:border-[#333] mt-[30px] p-4 w-[60%] transition-colors duration-300 ease-out">
      <a href="#" className="flex items-center justify-between ">
      <span className="text-sm font-semibold">{text}</span>
      <div>{icons[0].rightArrow}</div></a>
    </div>
  );
};

export default Button;
