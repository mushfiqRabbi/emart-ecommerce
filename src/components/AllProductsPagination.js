import Link from "next/link";

export default function AllProductsPagination({
  pageNumber,
  productCategory,
  totalPages,
}) {
  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center mt-3"
    >
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        {[...Array(totalPages)]?.map((val, index) => {
          return (
            <li
              className={`page-item ${
                pageNumber === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <Link
                className="page-link"
                href={`/products?category=${productCategory}&page=${index + 1}`}
              >
                {index + 1}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
