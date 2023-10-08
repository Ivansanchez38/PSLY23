import React from "react";
import { Id } from "../data/types";
import Article from "./Article";
import Image from "./Image";
import { products } from "../data/products"

const Products: React.FC<Id>  = ({ id }) => {
  
  const product = products.find((item) => item.id === id);
  if (!product) return null;

  return (
    <div className={`flex ${product.row} pt-40`}>
    {/* {!(typeof product.url === "object") && <Article id={id} />} */}
    <Article id={id}/>
      <Image id={id}/>
    </div>
  );
};

export default Products;
