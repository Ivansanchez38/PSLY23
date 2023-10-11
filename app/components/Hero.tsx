import React from "react";
import ImageCarousel from "./ImageCarousel";
import { products } from "../data/products";

const Hero = () => {
  const product = products.find((item) => item.id === 0);
  if (!product) return <div>Image</div>;

  return (
    <div className="bg-[#333333] text-center h-[80vh]">
      <ImageCarousel
        images={Object.values(product.url!).map((url) => ({ url }))}
        play={product.play}
        loop={product.loop}
      />
    </div>
  );
};

export default Hero;
