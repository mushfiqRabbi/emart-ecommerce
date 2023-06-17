"use client";

import Category from "./Category";

import { useProducts } from "../contexts/ProductsContext";

export default function Categories() {
  const { categories } = useProducts();
  // console.log(categories);
  return (
    <>
      <section>
        <div className="container pt-5">
          <nav className="row gy-4">
            {categories.slice(1).map((category, index) => {
              return <Category key={index} category={category} />;
            })}
          </nav>
        </div>
      </section>
      {/* category */}
    </>
  );
}
