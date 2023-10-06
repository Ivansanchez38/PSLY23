import React from "react";

const Topbar = () => {
  return (
    <header className="text-center">
      <div className="bg-[#c2c2af] pt-3 pb-2 text-sm leading-5 underline-offset-2 ">
        Trained Aesop consultants are available to provide bespoke skin care
        advice.{" "}
        <span>
          <a className="decoration-1 hover:underline font-semibold" href="#">
            Book a video consultation
          </a>
        </span>
      </div>

      <div className="text-white bg-[#252525] pt-3 pb-2 text-sm hover:underline underline-offset-[6px] transition duration-1000 ease-in-out cursor-pointer">
        Click and Collect is now available in Hong Kong. Enjoy complimentary
        shipping on orders over $400.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
      </div>

    </header>
  );
};

export default Topbar;
