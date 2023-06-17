"use client";
// import Link from "next/link";
import { useProducts } from "../contexts/ProductsContext";

export default function AllProductsPagination({}) {
  const { productsFiltered, pageNumber, setPageNumber } = useProducts();
  const pages = Math.ceil(productsFiltered.current.length / 12);
  // console.log(pages);
  function handleClick(e) {
    e.preventDefault();
    setPageNumber(this);
  }

  const handleNextPage = (e) => {
    e.preventDefault();
    setPageNumber((p) => p + 1);
  };
  const handlePreviousPage = (e) => {
    e.preventDefault();
    setPageNumber((p) => p - 1);
  };
  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center mt-3"
    >
      <ul className="pagination">
        <li className={`page-item ${pageNumber === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            aria-label="Previous"
            onClick={handlePreviousPage}
          >
            <span aria-hidden="true">«</span>
          </button>
        </li>
        {[...Array(pages)]?.map((val, index) => {
          return (
            <li
              className={`page-item ${
                pageNumber === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="page-link"
                onClick={handleClick.bind(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
        <li className={`page-item ${pageNumber === pages ? "disabled" : ""}`}>
          <button
            className="page-link"
            aria-label="Next"
            onClick={handleNextPage}
          >
            <span aria-hidden="true">»</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
