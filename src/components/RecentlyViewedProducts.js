export default function RecentlyViewedProducts() {
  return (
    <>
      {/* Recently viewed */}
      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="">
            <h3 className="section-title">Recently viewed</h3>
          </header>
          <div className="row gy-3">
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp"
                />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp"
                />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp"
                />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img
                  height={200}
                  width={200}
                  className="img-thumbnail"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Recently viewed */}
    </>
  );
}
