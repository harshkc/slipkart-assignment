import React, {useReducer, createContext, useContext} from "react";
import {products} from "../mockData";

const ProductContext = createContext();
ProductContext.displayName = "ProductContext";

const initialProducts = products;

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_CATEGORY":
      return state.filter((product) => product.category === action.payload);
    case "FILTER_BRAND":
      return state.filter((product) => product.brand === action.payload);
    case "FILTER_SIZE":
      return state.filter((product) => product.sizes.includes(action.payload));
    case "FILTER_PRICE_LOW":
      return state.sort((a, b) => a.price - b.price);
    case "FILTER_PRICE_HIGH":
      return state.sort((a, b) => b.price - a.price);
    case "FILTER_RESET":
      return initialProducts;

    default:
      return state;
  }
};

const ProductProvider = ({children}) => {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);
  return <ProductContext.Provider value={{products, dispatch}}>{children}</ProductContext.Provider>;
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export {ProductProvider, useProductContext};
