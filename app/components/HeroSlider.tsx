import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Article from "./Article";
import { icons } from "../data/icons";

type ImageType = {
  url: string;
};

type HeroSliderProps = {
  images?: ImageType[];
};

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  if (!images || images.length === 0) return <div>No images to display</div>;
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      useKeyboardArrows={true}
      showStatus={false}
      infiniteLoop={true}
      interval={5000}
      centerMode
      centerSlidePercentage={100}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`h-[80vh] flex flex-col md:flex-row w-full justify-between relative`}
        >
          <div className={`${index === 2 ? "block bg-[#f6f5e8] text-black" : "text-white absolute" } w-1/2 z-50  flex justify-between`}>
            <h1 className={`${index === 2 ? "fill-black" : "fill-white"} top-24 left-10 relative`}>{icons[0].aesop}</h1>
            <div className="flex basis-auto ml-[16.6666666667%] mr-auto">
            <Article id={0} index={index} /></div>
          </div>
          <div className={`${index === 2 ? "w-1/2" : "w-full"}`}>
            <img
              src={image.url}
              alt={`Image ${index}`}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
