export default function Intro() {
  return (
    <section className="pt-3">
      <div className="container">
        <div className="row gx-3">
          <main className="col-lg-9">
            <div
              className="card-banner p-5 bg-primary rounded-5"
              style={{ height: 350 }}
            >
              <div style={{ maxWidth: 500 }}>
                <h2 className="text-white">
                  Great products with <br />
                  best deals
                </h2>
                <p className="text-white">
                  No matter how far along you are in your sophistication as an
                  amateur astronomer, there is always one.
                </p>
                <a href="#" className="btn btn-light shadow-0 text-primary">
                  {" "}
                  View more{" "}
                </a>
              </div>
            </div>
          </main>
          <aside className="col-lg-3">
            <div
              className="card-banner h-100 rounded-5"
              style={{ backgroundColor: "#f87217" }}
            >
              <div className="card-body text-center pb-5">
                <h5 className="pt-5 text-white">Amazing Gifts</h5>
                <p className="text-white">
                  No matter how far along you are in your sophistication
                </p>
                <a href="#" className="btn btn-outline-light">
                  {" "}
                  View more{" "}
                </a>
              </div>
            </div>
          </aside>
        </div>
        {/* row //end */}
      </div>
      {/* container end.// */}
    </section>
  );
}
