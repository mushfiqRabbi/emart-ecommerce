import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted bg-primary mt-3">
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-12 col-lg-3 col-sm-12 mb-2">
                {/* Content */}
                <p className="text-white h2">eMart</p>
                <p className="mt-1 text-white">
                  © 2023 Copyright:{" "}
                  <Link href="mushfiqxrabbi@gmail.com" className="text-white">
                    mushfiqxrabbi@gmail.com
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Store
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a className="text-white-50" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Find store
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a className="text-white-50" href="#">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Money refund
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Shipping info
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Refunds
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a className="text-white-50" href="#">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Documents
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      Account restore
                    </a>
                  </li>
                  <li>
                    <a className="text-white-50" href="#">
                      My orders
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-12 col-sm-12 col-lg-3">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Newsletter
                </h6>
                <p className="text-white">
                  Stay in touch with latest updates about our products and
                  offers
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control border"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                    disabled
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                    disabled
                  >
                    Join
                  </button>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
      </footer>
      {/* Footer */}
    </>
  );
}
