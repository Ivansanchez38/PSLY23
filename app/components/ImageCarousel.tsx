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
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  width,
  height,
  scroller = false,
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
      className="hidden group-hover:block"
    >
      <SliderButton arrowIcon={arrowIcon} />
    </button>
  );

  return (
    <Carousel
      autoPlay={false}
      swipeable={true}
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      useKeyboardArrows={true}
      showStatus={false}
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
          // <p className="text-left animate-pulse">Lorem ipsum dolor sit amet.</p>

          <>
            <h2 className="hover:underline font-semibold text-sm">Lorem ipsum dolor sit.</h2>
            <h4 className="font-extralight text-sm text-gray-500 ">Lorem ipsum dolor sit.</h4>
          </>
        )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
