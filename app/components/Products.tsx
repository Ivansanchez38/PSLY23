import React from "react";
import Button from "./Button";

const Products = () => {
  return (
    <div className=" flex items-center flex-wrap justify-between pt-40 bg-slate-600">
      <div className=" w-1/3 pl-20 pb-20  flex flex-col items-center justify-center bg-slate-500">
        <div className="font-semibold text-sm mb-5 leading-[1.7]">
          <h3>The Athenaeum</h3>
        </div>
        <div className="font-medium text-3xl text-[1.875rem] mb-[30px]">
          <h1>Ouranon: the sixth Othertopias fragrance</h1>
        </div>
        <div className="para">
          <p>
            Each of the six Othertopias fragrances is a doorway to another
            realm, real and imagined. Ouranon—a woody, spicy, resinous scent,
            distinguished by Frankincense, Hay and Myrrh—is the final chapter of
            that journey.
          </p>
        </div>
        <div className="btn flex items-center justify-between border border-solid border-gray-300 p-4 w-[60%] hover:bg-black hover:text-white ">
          <div className="font font-bold">
            <Button />
          </div>
          {/* <UilArrowRight size={25} /> */}
        </div>
      </div>

      <div className="w-auto h-10rem object-cover">
        <video className="w-full h-full" autoPlay muted loop>
          <source
            src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Products;
