export default function RecommendedProducts() {
  return (
    <>
      {/* Recommended */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>Recommended</h3>
          </header>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                    className="card-img-top rounded-2"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </a>
                <div className="card-body p-0 pt-3">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary" />
                  </a>
                  <h5 className="card-title">$17.00</h5>
                  <p className="card-text mb-0">Blue jeans shorts for men</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                    className="card-img-top rounded-2"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary" />
                  </a>
                  <h5 className="card-title">$9.50</h5>
                  <p className="card-text mb-0">Slim fit T-shirt for men</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                    className="card-img-top rounded-2"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary" />
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                    className="card-img-top rounded-2"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary" />
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Material: Jeans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended */}
    </>
  );
}
