import React from "react";
import Button from "./Button";
import { Id } from "../data/types";
import { products } from "../data/products"

const Article: React.FC<Id>  = ({ id }) => {

  const product = products.find((item) => item.id === id);
  if (!product) return <div>Image</div>;

  return (
    <div className={`${product.pl} pt-[110px] pb-[180px] flex text-left mb-4 flex-col`}>
      {product.heading && <div className="font-semibold text-sm mb-5 leading-[1.7]">
        <h3>{product.heading}</h3>
      </div> }
      <div className="font-medium text-3xl mb-[30px] font-suss">
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
