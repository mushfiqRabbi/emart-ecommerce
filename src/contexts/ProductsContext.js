"use client";

import { createContext, useEffect, useState, useContext, useRef } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsCount, setProductsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [category, setCategory] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [gridView, setGridView] = useState(true);

  const productsVisible = useRef([]);

  if (!productsLoading) {
    productsVisible.current =
      category === "all"
        ? products.slice(pageNumber * 12 - 12, pageNumber * 12)
        : products
            .filter((product) => product.category === category)
            .slice(pageNumber * 12 - 12, pageNumber * 12);

    // console.log(productsVisible.current);
  }

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      // console.log(data);
      setProducts([...data.products]);
      setProductsCount(data.productsCount);
      data.categories.unshift("all");
      // console.log();
      setCategories([
        ...data.categories.map((cat) => {
          if (cat === "all") {
            return cat;
          } else {
            return cat.category;
          }
        }),
      ]);
      setCategoriesCount(data.categoriesCount);
      setProductsLoading(false);
      // console.log(data.productsCount);
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsCount,
        productsLoading,
        categories,
        categoriesCount,
        category,
        setCategory,
        pageNumber,
        setPageNumber,
        gridView,
        setGridView,
        productsVisible,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
