"use client";

import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import ScreenWidth from "../utils/ScreenSize";
import { products } from "../data/products";

type ImageType = {
  url: string;
};

type HeroProps = {
  images?: ImageType[];
};

const Hero: React.FC<HeroProps> = () => {
  const product = products.find((item) => item.id === 0);
  const currentWidth = ScreenWidth();
  const [useLargeImages, setUseLargeImages] = useState(true);

  useEffect(() => {
    setUseLargeImages(currentWidth >= 768);
  }, [currentWidth]);

  if (!product) return <div>Image</div>;

  return (
    <div className="bg-[#333333] text-center">
    <HeroSlider
      images={useLargeImages
        ? Object.values(product.url!).map((url) => ({ url }))
        : Object.values(product.smallUrl!).map((url) => ({ url }))}
    />
    </div>
  );
};

export default Hero;
