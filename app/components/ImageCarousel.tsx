"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SliderButton from "./SliderButton";
import ScreenWidth from "../utils/ScreenSize"

type ImageCarouselProps = {
  images?: { url: string }[];
  title?: Record<number, string>;
  width?: string;
  height?: string;
  scroller?: boolean;
  productH2?: Record<number, string>;
  productH4?: Record<number, string>;
  play?: boolean;
  loop?: boolean;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  title,
  productH2,
  productH4,
  width,
  height,
  scroller = false,
  play = false,
  loop = false,
}) => {
  const [opacity, setOpacity] = useState(true);

  if (!images || images.length === 0) return <div>No images to display</div>;

  const handleArrowClick = () => {
    setTimeout(() => {
      setOpacity(true);
    }, 500);
    setOpacity(false);
  };

  const centerSlidePercentage = scroller ? 40 : 100;
  const renderArrowButton = ( clickHandler: () => void,arrowIcon: string ) => (
    <button
      onClick={() => {
        clickHandler();
        handleArrowClick();
      }}
      className="hidden group-hover:block select-none"
    >
      <SliderButton arrowIcon={arrowIcon} />
    </button>
  );
  const currentWidth = ScreenWidth();
  console.log(currentWidth)

  // const centerSlideHandler = () => {
  //   if(currentWidth < 738){
  //     const centerSlide = 70
  //   }else{
  //     centerSlidePercentage
  //   }
  // }

  return (
    <Carousel
      autoPlay={play}
      swipeable={true}
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      useKeyboardArrows={true}
      showStatus={false}
      infiniteLoop={loop}
      interval={5000}
      centerMode
      centerSlidePercentage={centerSlidePercentage}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && renderArrowButton(clickHandler, "previous")
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && renderArrowButton(clickHandler, "next")
      }
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`${width} ${height} flex flex-col justify-end text-center`}
        >
          <img
            src={image.url}
            alt={`Image ${index+1}`}
            className="h-auto w-auto"
          />
          {!scroller && title ? (
            <p
              className={`text-left pt-4 ${
                !opacity ? "opacity-0" : "opacity-100"
              } transition-opacity duration-200`}
            >
              {title[index]}
            </p>
          ) : (
            <>
              {productH2 && productH4 && (
                <div>
                  <h2 className="hover:underline font-semibold text-sm pb-2">
                    {productH2[index]}
                  </h2>
                  <h4 className="font-extralight text-sm">
                    {productH4[index]}
                  </h4>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
