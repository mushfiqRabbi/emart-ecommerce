export default function ProductsLayoutHeader() {
  return (
    <div className="bg-primary mb-4">
      <div className="container py-4">
        <h3 className="text-white mt-2">{`Men's wear`}</h3>
        {/* Breadcrumb */}
        <nav className="d-flex mb-2">
          <h6 className="mb-0">
            <a href="" className="text-white-50">
              Home
            </a>
            <span className="text-white-50 mx-2"> &gt; </span>
            <a href="" className="text-white-50">
              Library
            </a>
            <span className="text-white-50 mx-2"> &gt; </span>
            <a href="" className="text-white">
              <u>Data</u>
            </a>
          </h6>
        </nav>
        {/* Breadcrumb */}
      </div>
    </div>
  );
}
