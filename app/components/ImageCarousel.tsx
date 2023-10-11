"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SliderButton from "./SliderButton";

type ImageType = {
  url: string;
};

type ImageCarouselProps = {
  images: ImageType[];
  width?: string;
  height?: string;
  scroller?: boolean;
  productH2?: Record<number, string>;
  productH4?: Record<number, string>;
  loop?: boolean;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  productH2,
  productH4,
  width,
  height,
  scroller = false,
  loop = false
}) => {
  const [isPulseAnimating, setIsPulseAnimating] = useState(false);
  const handleArrowClick = () => {
    setIsPulseAnimating(true);
    setTimeout(() => {
      setIsPulseAnimating(false);
    }, 800);
  };
  if (!images || images.length === 0) return <div>No images to display</div>;

  const centerSlidePercentage = scroller ? 40 : 100;
  const renderArrowButton = (
    clickHandler: { (): void; (): void; (): void },
    arrowIcon: string
  ) => (
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

  return (
    <>
    <Carousel
      autoPlay={false}
      swipeable={true}
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      useKeyboardArrows={true}
      showStatus={false}
      infiniteLoop={loop}
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
          className={`${width} bg-sate-500 ${height} flex flex-col justify-end text-center`}
        >
          <img
            src={image.url}
            alt={`Image ${index}`}
            className="h-auto w-auto"
          />
          {!scroller ? (
            <p
              className={`text-left ${isPulseAnimating ? "animate-pulse" : ""}`}
            >
              Lorem ipsum dolor sit amet.
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
    <div className={` ${4 === 4 ? "swiper-scrollbar" : ""}`}></div></>
  );
};

export default ImageCarousel;
