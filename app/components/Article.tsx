import React from "react";
import Button from "./Button";
import { Id } from "../data/types";
import { products } from "../data/products"

const Article: React.FC<Id>  = ({ id }) => {

  const product = products.find((item) => item.id === id);
  if (!product) return <div>Image</div>;

  return (
    <div className={`${id === 0 ? 'pt-[110px] pb-[180px] pr-20' : 'w-1/3 pb-20'} ${product.pr} flex text-left mb-4 flex-col`}>
      {product.heading && <div className="font-semibold text-sm mb-5 leading-[1.7]">
        <h3>{product.heading}</h3>
      </div> }
      <div className={`${id === 0 ?" font-suss" : "font-zapf"} font-medium text-3xl mb-[30px]`}>
        <h2>{product.subHeading}</h2>
      </div>
      <div className="pr-4 text-base">
        <p className="text-base leading-[1.7]">{product.para}</p>
      </div>
      <Button text={product.buttonText} />
    </div>
  );
};

export default Article;
