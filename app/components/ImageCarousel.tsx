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
};


const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, width }) => {
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }
  return (
    <Carousel
      autoPlay={false}
      swipeable={true}
      showArrows={true}
      showIndicators={false}
      useKeyboardArrows={true}
    >
      {images.map((image, index) => (
        <div key={index} className={width}>
          <img
            src={image.url}
            alt={`Image ${index}`}
            className="w-full h-full"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
