import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Article from "./Article";
import { icons } from "../data/icons";
import SliderButton from "./SliderButton";

type ImageType = {
  url: string;
};

type HeroSliderProps = {
  images?: ImageType[];
};

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [totalIndex] = useState(images?.length);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [clickPrev, setClickPrev] = useState<() => () => void | null>(() => () => null);
  const [clickNext, setClickNext] = useState<() => void | null>(() => () => null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (images) {
      timer = setInterval(() => {
        const nextIndex = currentIndex % images.length + 1;
        if (autoPlay) setCurrentIndex(nextIndex);
      }, 6000);
    }

    return () => { if (timer) clearInterval(timer); };

  }, [autoPlay, currentIndex, images]);

  if (!images || images.length === 0) return <div>No images to display</div>;

  return (
    <>
      <Carousel
        autoPlay={autoPlay}
        stopOnHover={false}
        swipeable={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        useKeyboardArrows={true}
        showStatus={false}
        infiniteLoop={true}
        interval={6000}
        centerMode
        centerSlidePercentage={100}
        // @ts-ignore
        renderArrowPrev={(clickHandler) => setClickPrev(() => clickHandler)}
        // @ts-ignore
        renderArrowNext={(clickHandler) => setClickNext(() => clickHandler)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-screen md:h-[80vh] flex flex-col md:flex-row w-full justify-between relative`}
          >
            <div
              className={`${
                index === 2
                  ? "block bg-[#f6f5e8] text-black"
                  : "text-white absolute"
              } w-1/2 z-50  flex justify-between`}
            >
              <h1
                className={`${
                  index === 2 ? "fill-black" : "fill-white"
                } top-24 left-10 relative`}
              >
                {icons[0].aesop}
              </h1>
              <div className="flex basis-auto ml-[16.6666666667%] mr-auto">
                <Article id={0} index={index} tabIndex={-1}/>
              </div>
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
      <SliderButton
        clickPrev={clickPrev}
        clickNext={clickNext}
        heroButton={true}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
        totalIndex={totalIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
};

export default HeroSlider;
