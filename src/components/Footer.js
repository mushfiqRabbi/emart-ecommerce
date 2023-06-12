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
                <a
                  href="https://mdbootstrap.com/"
                  target="_blank"
                  className="text-white h2"
                >
                  MDB
                </a>
                <p className="mt-1 text-white">
                  © 2023 Copyright: MDBootstrap.com
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
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
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
        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top">
              {/*- payment -*/}
              <div>
                <i className="fab fa-lg fa-cc-visa text-white" />
                <i className="fab fa-lg fa-cc-amex text-white" />
                <i className="fab fa-lg fa-cc-mastercard text-white" />
                <i className="fab fa-lg fa-cc-paypal text-white" />
              </div>
              {/*- payment -*/}
              {/*- language selector -*/}
              <div className="dropdown dropup">
                <a
                  className="dropdown-toggle text-white"
                  href="#"
                  id="Dropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="flag-united-kingdom flag m-0 me-1" />
                  English{" "}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="Dropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-united-kingdom flag" />
                      English <i className="fa fa-check text-success ms-2" />
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-poland flag" />
                      Polski
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-china flag" />
                      中文
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-japan flag" />
                      日本語
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-germany flag" />
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-france flag" />
                      Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-spain flag" />
                      Español
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-russia flag" />
                      Русский
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-portugal flag" />
                      Português
                    </a>
                  </li>
                </ul>
              </div>
              {/*- language selector -*/}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer */}
    </>
  );
}
