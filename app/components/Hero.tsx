"use client";

import React from "react";
import { products } from "../data/products";
import HeroSlider from "./HeroSlider";

type ImageType = {
  url: string;
};

type HeroProps = {
  images?: ImageType[];
};

const Hero: React.FC<HeroProps> = () => {
  const product = products.find((item) => item.id === 0);
  if (!product) return <div>Image</div>;

  return (
    <div className="bg-[#333333] text-center">
      <HeroSlider
        images={Object.values(product.url!).map((url) => ({ url }))}
      />
    </div>
  );
};

export default Hero;
