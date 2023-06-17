"use client";
import { Skeleton } from "react-skeleton-generator";
import { useProducts } from "../contexts/ProductsContext";

export default function AllProductsHeader() {
  const {
    productsCount: totalProductsNumber,
    category: productCategory,
    pageNumber,
    gridView: productView,
    setGridView,
    productsVisible,
    productsLoading,
  } = useProducts();
  // console.log(productView);
  const handleListClick = (e) => {
    e.preventDefault();
    setGridView(false);
  };
  const handleGridClick = (e) => {
    e.preventDefault();
    setGridView(true);
  };
  // console.log(productView);
  const inActive = "btn btn-light";
  const active = "btn btn-light active";
  return (
    <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
      <strong className="d-block py-2">
        {productsLoading && (
          <Skeleton.SkeletonThemeProvider>
            <Skeleton />
          </Skeleton.SkeletonThemeProvider>
        )}
        {!productsLoading && `${productsVisible.current.length} Items found`}
      </strong>
      <div className="ms-auto">
        {/* <select className="form-select d-inline-block w-auto border pt-1">
          <option value={0}>Best match</option>
          <option value={1}>Recommended</option>
          <option value={2}>High rated</option>
          <option value={3}>Randomly</option>
        </select> */}
        <div className="btn-group shadow-0 border">
          <a
            className={!productView ? active : inActive}
            title="List View"
            onClick={handleListClick}
          >
            <i className="fa fa-bars fa-lg" />
          </a>
          <a
            className={productView ? active : inActive}
            title="Grid View"
            onClick={handleGridClick}
          >
            <i className="fa fa-th fa-lg" />
          </a>
        </div>
      </div>
    </header>
  );
}
