"use client";

import Link from "next/link";
import { useProducts } from "../contexts/ProductsContext";
import { Skeleton } from "react-skeleton-generator";

const cf = [];

export default function AllProductsSidebar() {
  const {
    categories,
    setCategory,
    brands,
    productsCount,
    brand,
    setBrand,
    productsVisible,
    category,
    products,
    setPageNumber,
    productsLoading,
  } = useProducts();

  const handleCheck = (e) => {
    // e.preventDefault();
    // console.log(e.target.checked);
    // console.log(cf);
    if (e.target.checked) {
      cf.push(e.target);
      brand.push(e.target.value);
      setBrand([...brand]);
      return;
    }
    cf.pop(e.target);
    brand.pop(e.target.value);
    setBrand([...brand]);
  };
  const handleClick = (e) => {
    e.preventDefault();
    // console.dir(e.target.textContent.toLowerCase());
    cf.forEach((box) => (box.checked = false));
    setBrand([]);
    setPageNumber(1);
    setCategory(e.target.textContent.toLowerCase());
  };
  return (
    <div className="col-lg-3">
      {/* Toggle button */}
      <button
        className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>Show filter</span>
      </button>
      {/* Collapsible wrapper */}
      <div
        className="collapse card d-lg-block mb-5"
        id="navbarSupportedContent"
      >
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Categories
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  {productsLoading && (
                    <Skeleton.SkeletonThemeProvider>
                      <Skeleton
                        style={{
                          height: "55vh",
                        }}
                      />
                    </Skeleton.SkeletonThemeProvider>
                  )}
                  {!productsLoading &&
                    categories.map((ct, index) => {
                      return (
                        <li key={index} className="row">
                          <a
                            className={`${
                              ct === category
                                ? "bg-primary text-white"
                                : "text-dark"
                            }`}
                            onClick={handleClick}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            {ct[0].toUpperCase() + ct.slice(1)}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Brands
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
            >
              <div className="accordion-body">
                <div>
                  {/* Checked checkbox */}
                  {productsLoading && (
                    <Skeleton.SkeletonThemeProvider>
                      <Skeleton
                        style={
                          {
                            // height: "auto",
                          }
                        }
                      />
                    </Skeleton.SkeletonThemeProvider>
                  )}
                  {!productsLoading &&
                    category !== "all" &&
                    Array.from(
                      new Set(
                        products
                          .filter((p) => p.category === category)
                          .map((p) => p.brand)
                      )
                    ).map((brand, index) => {
                      return (
                        <div
                          className="form-check d-flex flex-col align-items-center justify-content-between"
                          key={index}
                        >
                          <div>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={brand}
                              defaultChecked=""
                              onChange={handleCheck}
                              value={brand}
                            />
                            <label className="form-check-label" htmlFor={brand}>
                              {brand}
                            </label>
                          </div>
                          <span className="badge badge-secondary float-end">
                            {
                              Array.from(
                                new Set(
                                  products.filter(
                                    (p) =>
                                      p.brand === brand &&
                                      p.category === category
                                  )
                                )
                              ).length
                            }
                          </span>
                        </div>
                      );
                    })}
                  {category === "all" &&
                    brands.map((brand, index) => {
                      return (
                        <div
                          className="form-check d-flex flex-col align-items-center justify-content-between"
                          key={index}
                        >
                          <div>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={brand.brand}
                              defaultChecked=""
                              onChange={handleCheck}
                              value={brand.brand}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={brand.brand}
                            >
                              {brand.brand}
                            </label>
                          </div>
                          <span className="badge badge-secondary float-end">
                            {brand?._count}
                          </span>
                        </div>
                      );
                    })}
                  {/* Checked checkbox */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Price
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
              aria-labelledby="headingThree"
            >
              <div className="accordion-body">
                <div className="range">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <p className="mb-0">Min</p>
                    <div className="form-outline">
                      <input
                        type="number"
                        id="typeNumber"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="typeNumber">
                        $0
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-0">Max</p>
                    <div className="form-outline">
                      <input
                        type="number"
                        id="typeNumber"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="typeNumber">
                        $1,0000
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-white w-100 border border-secondary"
                >
                  apply
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Ratings
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="headingThree"
            >
              <div className="accordion-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="five-star"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="five-star">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="four-star"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="four-star">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-secondary" />
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="three-star"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="three-star">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="two-star"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="two-star">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="one-start"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="one-start">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                    <i className="fas fa-star text-secondary" />
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
