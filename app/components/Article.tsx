import React from "react";
import ArticleButton from "./ArticleButton";
import { Id } from "../data/types";
import { products } from "../data/products";

const Article: React.FC<Id> = ({ id, index, tabIndex }) => {
  const product = products.find((item) => item.id === id);
  if (!product) return <div>Image</div>;

  index = index ?? 0;

  const heading =
    typeof product.heading === "string"
      ? product.heading
      : product.heading?.[index];

  const subHeading =
    typeof product.subHeading === "string"
      ? product.subHeading
      : product.subHeading?.[index];

  const para =
    typeof product.para === "string" ? product.para : product.para?.[index];

  const buttonText =
    typeof product.buttonText === "string"
      ? product.buttonText
      : product.buttonText?.[index];

  return (
    <div
      className={`${id === 0 ? "pt-[110px] pb-4 md:pb-[180px] pr-10 md:pr-20" : " w-full md:w-1/3 pb-5 md:pb-20"} ${
        product.pr
      } flex flex-col text-left mb-4`}
    >
      {product.heading && (
        <div className="font-semibold text-sm mb-5 leading-[1.7]">
          <h3>{heading}</h3>
        </div>
      )}
      <div
        className={`${
          id === 0 ? "font-suss" : "font-zapf"
        } font-medium text-2xl md:text-3xl mb-[30px]`}
      >
        <h2>{subHeading}</h2>
      </div>
      <div className="pr-4 text-base">
        <p className="text-base leading-[1.7]">{para}</p>
      </div>
      <ArticleButton
        text={buttonText}
        hero={product.hero}
        index={index}
        sliderButton={product.sliderButton}
        tabIndex={tabIndex}
      />
    </div>
  );
};

export default Article;
