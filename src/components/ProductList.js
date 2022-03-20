import React from "react";
import {products} from "../mockData";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className='flex flex-row flex-wrap py-4 ml-6'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
