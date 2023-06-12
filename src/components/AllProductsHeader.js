import Link from "next/link";

export default function AllProductsHeader({
  totalProductsNumber,
  productCategory,
  pageNumber,
  productView,
}) {
  return (
    <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
      <strong className="d-block py-2">
        {totalProductsNumber} Items found{" "}
      </strong>
      <div className="ms-auto">
        <select className="form-select d-inline-block w-auto border pt-1">
          <option value={0}>Best match</option>
          <option value={1}>Recommended</option>
          <option value={2}>High rated</option>
          <option value={3}>Randomly</option>
        </select>
        <div className="btn-group shadow-0 border">
          <Link
            href={`/products?category=${productCategory}&page=${pageNumber}&view=list`}
            className={`btn btn-light ${
              productView !== "gird" ? null : "active"
            }`}
            title="List view"
          >
            <i className="fa fa-bars fa-lg" />
          </Link>
          <Link
            href={`/products?category=${productCategory}&page=${pageNumber}&view=grid`}
            className={`btn btn-light ${
              productView === "gird" ? "active" : null
            }`}
            title="Grid view"
          >
            <i className="fa fa-th fa-lg" />
          </Link>
        </div>
      </div>
    </header>
  );
}
