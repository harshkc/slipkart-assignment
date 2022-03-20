import React from "react";
import ProductCard from "./ProductCard";
import {useProductContext} from "../Context/ProductContext";

const ProductList = () => {
  const {products} = useProductContext();
  console.log(products);
  return (
    <div className='flex flex-row flex-wrap py-4 ml-6'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
