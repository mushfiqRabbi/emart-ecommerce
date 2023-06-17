import Link from "next/link";

export default function FeatureSectionTwo() {
  return (
    <>
      {/* Features */}
      <section>
        <div className="container">
          <div className="card p-4 bg-primary">
            <div className="row align-items-center">
              <div className="col">
                <h4 className="mb-0 text-white">
                  Best products and brands in store
                </h4>
                <p className="mb-0 text-white-50">
                  Trendy products and text to build on the card title
                </p>
              </div>
              <div className="col-auto">
                <Link
                  className="btn btn-white text-primary shadow-0"
                  href={`/products`}
                >
                  Discover
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
    </>
  );
}
