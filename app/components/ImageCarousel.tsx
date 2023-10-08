"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type ImageType = {
  url: string;
};

type ImageCarouselProps = {
  images: ImageType[];
  width?: string;
  scroller?: boolean;
};


const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, width, scroller = false }) => {
  if (!images || images.length === 0) return <div>No images to display</div>;

  const centerSlidePercentage = scroller ? 40 : 100;

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
    >
      {images.map((image, index) => (
        <div key={index} className={width}>
          <img
            src={image.url}
            alt={`Image ${index}`}
            className="w-full h-full"
          />
          {scroller && <p>Lorem ipsum dolor sit amet.</p>}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
