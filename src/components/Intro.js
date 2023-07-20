"use client";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useProducts } from "../contexts/ProductsContext";
// import Link from "next/link";
import { Skeleton } from "react-skeleton-generator";
import "./Intro.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Intro() {
  const { productsLoading, products } = useProducts();
  console.log(products);

  const isTablet = useMediaQuery({
    query: "(max-width: 766px)",
  });
  const isMobile = useMediaQuery({ query: "( max-width: 576px)" });

  return (
    <section className="pt-3">
      <div
        className="container p-0"
        style={{
          height: "450px",
        }}
      >
        {productsLoading && (
          <Skeleton.SkeletonThemeProvider>
            <Skeleton
              style={{
                width: "auto",
                height: "450px",
                borderRadius: "5px",
              }}
            />
          </Skeleton.SkeletonThemeProvider>
        )}
        {!productsLoading && (
          <Swiper
            centeredSlides={isTablet ? true : false}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation
            pagination={{ clickable: true }}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            spaceBetween={40}
            loop={true}
            className="mySwiper"
            style={{
              padding: "40px 20px",
            }}
          >
            {[...Array(9)].map((_, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="shadow rounded"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <Link href={`/products/${products[i].id_}`}>
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={products[i].thumbnail}
                        alt="product image"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </section>
  );
}
