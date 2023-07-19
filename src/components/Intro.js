"use client";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useProducts } from "../contexts/ProductsContext";
// import Link from "next/link";
import { Skeleton } from "react-skeleton-generator";
import "./Intro.css";
import Image from "next/image";
import { useRef } from "react";
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
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
              disableOnInteraction: true,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
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
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
