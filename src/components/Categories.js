"use client";

import Category from "./Category";

import { useProducts } from "../contexts/ProductsContext";
import { Skeleton } from "react-skeleton-generator";

export default function Categories() {
  const { categories, productsLoading } = useProducts();
  // console.log(categories);
  return (
    <>
      <section>
        <div className="container pt-5">
          <header className="mb-4">
            <h3>Categories</h3>
          </header>
          <nav className="row gy-4">
            {productsLoading && (
              <Skeleton.SkeletonThemeProvider>
                <Skeleton
                  style={{
                    height: "500px",
                  }}
                ></Skeleton>
              </Skeleton.SkeletonThemeProvider>
            )}
            {!productsLoading &&
              categories.slice(1).map((category, index) => {
                return <Category key={index} category={category} />;
              })}
          </nav>
        </div>
      </section>
      {/* category */}
    </>
  );
}
