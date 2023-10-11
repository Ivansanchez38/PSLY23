import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type ImageType = {
  url: string;
};

type HeroSliderProps = {
  images?: ImageType[];
};

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  console.log(images);
  if (!images || images.length === 0) return <div>No images to display</div>;
  return (
    <Carousel
    //   autoPlay={true}
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
          className={`h-[80vh] flex w-full ${
            index === 2 ? "justify-end" : "justify-center"
          } relative bg-pink-600`}
        >
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
