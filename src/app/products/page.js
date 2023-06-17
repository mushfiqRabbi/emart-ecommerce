"use client";
import AllProducts from "../../components/AllProducts";
import AllProductsHeader from "../../components/AllProductsHeader";
import AllProductsPagination from "../../components/AllProductsPagination";
import AllProductsSidebar from "../../components/AllProductsSidebar";
// import AllProductsBreadCrumb from "../../components/AllProductsBreadCrumb";

import { useProducts } from "../../contexts/ProductsContext";
import { useCart } from "../../contexts/CartContext";
import { Skeleton } from "react-skeleton-generator";

export default function Products() {
  const {
    productsLoading,
    products,
    gridView,
    pageNumber,
    category,
    productsVisible,
  } = useProducts();
  const { cartLoading, cart } = useCart();
  // console.log(loading);
  // if (productsLoading || cartLoading) {
  //   return <p>loading</p>;
  // } else
  {
    return (
      <>
        {/* Heading */}
        <div className="bg-primary mb-4">
          <div className="container py-4">
            {/* <h3 className="text-white mt-2">{productCategory.toUpperCase()}</h3> */}
            {/* Breadcrumb */}
            {/* <AllProductsBreadCrumb productCategory={productCategory} /> */}
            {/* Breadcrumb */}
          </div>
        </div>
        {/* Heading */}
        <>
          {/* sidebar + content */}
          <section className="">
            <div className="container">
              <div className="row">
                {/* sidebar */}
                <AllProductsSidebar />
                {/* sidebar */}
                {/* content */}
                <div className="col-lg-9">
                  {/* AllProductsHeader */}
                  <AllProductsHeader />
                  {/* AllProductsHeader */}
                  {/* products */}
                  {productsLoading && (
                    <div className="row">
                      {[...Array(12)].map((_, key) => {
                        return (
                          <div
                            key={key}
                            className="col-lg-4 col-md-6 col-sm-6 d-flex"
                          >
                            <div className="card w-100 my-2 shadow-2-strong">
                              <Skeleton.SkeletonThemeProvider>
                                <Skeleton
                                  style={{
                                    height: "400px",
                                  }}
                                />
                              </Skeleton.SkeletonThemeProvider>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {/* {productsLoading && (
                    <AllProducts products={productsVisible?.current} />
                  )} */}
                  {!productsLoading && gridView && (
                    <div className="row">
                      <AllProducts products={productsVisible?.current} />
                    </div>
                  )}
                  {!productsLoading && !gridView && (
                    <AllProducts products={productsVisible?.current} />
                  )}
                  {/* products */}
                  <hr />
                  {/* Pagination */}
                  <AllProductsPagination />
                  {/* Pagination */}
                </div>
              </div>
            </div>
          </section>
          {/* sidebar + content */}
        </>
      </>
    );
  }
}
