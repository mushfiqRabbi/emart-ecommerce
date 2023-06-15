export default function FeatureSectionOne() {
  return (
    <>
      {/* Feature */}
      <section className="">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div
                className="card-banner bg-gray h-100"
                style={{
                  minHeight: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  top: "50%",
                  backgroundImage:
                    'url("https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner-item2.webp")',
                }}
              >
                <div className="p-3 p-lg-5" style={{ maxWidth: "70%" }}>
                  <h3 className="text-dark">
                    Best products &amp; brands in our store at 80% off
                  </h3>
                  <p>{`That's true but not always`}</p>
                  <button className="btn btn-warning shadow-0" href="#">
                    {" "}
                    Claim offer{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3 mb-sm-4 g-3 g-sm-4">
                <div className="col-6 d-flex">
                  <div
                    className="card w-100 bg-primary"
                    style={{ minHeight: 200 }}
                  >
                    <div className="card-body">
                      <h5 className="text-white">Gaming toolset</h5>
                      <p className="text-white-50">
                        Technology for cyber sport
                      </p>
                      <a className="btn btn-outline-light btn-sm" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div
                    className="card w-100 bg-primary"
                    style={{ minHeight: 200 }}
                  >
                    <div className="card-body">
                      <h5 className="text-white">Quality sound</h5>
                      <p className="text-white-50">All you need for music</p>
                      <a className="btn btn-outline-light btn-sm" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* row.// */}
              <div className="card bg-success" style={{ minHeight: 200 }}>
                <div className="card-body">
                  <h5 className="text-white">Buy 2 items, With special gift</h5>
                  <p className="text-white-50" style={{ maxWidth: 400 }}>
                    Buy one, get one free marketing strategy helps your business
                    improves the brand by sharing the profits
                  </p>
                  <a className="btn btn-outline-light btn-sm" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* container end.// */}
      </section>
      {/* Feature */}
    </>
  );
}
