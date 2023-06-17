"use client";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useProducts } from "../contexts/ProductsContext";
import Link from "next/link";
import { Skeleton } from "react-skeleton-generator";

export default function Intro() {
  const { productsLoading, products } = useProducts();
  // if (productsLoading) {
  //   return <p>loading</p>;
  // } else
  return (
    <section className="pt-3">
      <div className="container">
        <div className="row gx-3">
          <main
            className="col-lg-9"
            style={
              {
                // height: "500px",
                // overflow: "hidden",
                // borderRadius: "25px",
                // overflow: "hidden",
                // overflow: "hidden",
              }
            }
          >
            {" "}
            {productsLoading && (
              <Skeleton.SkeletonThemeProvider>
                <Skeleton
                  style={{
                    width: "auto",
                    height: "400px",
                    borderRadius: "5px",
                  }}
                />
              </Skeleton.SkeletonThemeProvider>
            )}
            {!productsLoading && (
              <MDBCarousel
                showControls
                showIndicators
                style={{
                  // height: "400px",
                  // borderRadius: "10px",
                  overflow: "hidden",
                }}
                className="rounded-5 shadow"
              >
                {[...Array(10)].map((_, index) => {
                  const product =
                    products[Math.floor(Math.random() * products.length)];

                  return (
                    <Link href={`/products/${product.id_}`} key={product?.id}>
                      <MDBCarouselItem
                        className="w-100 d-block"
                        itemId={index + 1}
                        src={product?.thumbnail}
                        alt={product?.title}
                        style={{
                          height: "400px",
                          // height: "100%",
                          // borderRadius: "10px",
                          // overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.5)",
                            padding: "10px 5px",
                            // width: "100%",
                            color: "white",
                            borderRadius: "5px",
                          }}
                        >
                          <h5>{product?.title}</h5>
                          <p>{product?.description}</p>
                        </div>
                      </MDBCarouselItem>
                    </Link>
                  );
                })}
              </MDBCarousel>
            )}
          </main>
          <aside className="d-none d-lg-block col-lg-3 mt-2 mt-lg-0">
            {productsLoading && (
              <Skeleton.SkeletonThemeProvider>
                <Skeleton
                  style={{
                    height: "400px",
                  }}
                />
              </Skeleton.SkeletonThemeProvider>
            )}
            {!productsLoading && (
              <MDBCarousel
                className="rounded-5 shadow"
                style={{
                  overflow: "hidden",
                }}
              >
                {[...Array(3)].map((_, index) => {
                  const product =
                    products[Math.floor(Math.random() * products.length)];
                  return (
                    <Link href={`/products/${product.id_}`} key={index}>
                      <MDBCarouselItem
                        className="w-100 d-block"
                        itemId={index + 1}
                        src={product.thumbnail}
                        alt="..."
                        style={{
                          height: "400px",
                        }}
                      />
                    </Link>
                  );
                })}
              </MDBCarousel>
            )}
          </aside>
        </div>
        {/* row //end */}
      </div>
      {/* container end.// */}
    </section>
  );
}
