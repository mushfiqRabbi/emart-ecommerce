"use client";
import Image from "next/image";
import { useProducts } from "../contexts/ProductsContext";
import Link from "next/link";
import { Skeleton } from "react-skeleton-generator";

export default function RecentlyViewedProducts() {
  const { productsLoading, products } = useProducts();
  return (
    <>
      {/* Recently viewed */}
      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="">
            <h3 className="section-title">Recently viewed</h3>
          </header>
          <div className="row gy-3">
            {productsLoading &&
              [...Array(6)].map((_, key) => {
                return (
                  <div key={key} className="col-lg-2 col-md-4 col-4">
                    <Skeleton.SkeletonThemeProvider>
                      <Skeleton
                        style={{
                          height: "150px",
                          width: "180px",
                        }}
                      />
                    </Skeleton.SkeletonThemeProvider>
                  </div>
                );
              })}
            {!productsLoading &&
              products.slice(10, 16).map((product) => {
                return (
                  <div className="col-lg-2 col-md-4 col-4" key={product.id}>
                    <Link
                      href={`/products/${product.id_}`}
                      className="img-wrap"
                    >
                      <Image
                        alt={product.title}
                        height={200}
                        width={200}
                        className="img-thumbnail"
                        src={product.thumbnail}
                        style={{
                          height: "150px",
                          width: "200px",
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* Recently viewed */}
    </>
  );
}
