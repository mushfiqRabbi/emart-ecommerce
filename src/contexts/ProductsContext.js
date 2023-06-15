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
  const [brands, setBrands] = useState([]);
  const [brandsCount, setBrandsCount] = useState(0);
  const [brand, setBrand] = useState([]);

  const productsVisible = useRef([]);

  if (!productsLoading) {
    productsVisible.current = products
      .filter((p) => {
        if (category === "all") {
          return p;
        } else if (category === p.category) {
          return p;
        }
      })
      .filter((p1) => {
        if (brand.length === 0) {
          return p1;
        } else if (brand.includes(p1.brand)) {
          return p1;
        }
      })
      .slice((pageNumber - 1) * 12, pageNumber * 12);

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
      setBrands([...data.brands]);
      setBrandsCount(data.brandsCount);
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
        brands,
        setBrands,
        brandsCount,
        setBrandsCount,
        brand,
        setBrand,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
