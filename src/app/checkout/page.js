export default function Checkout() {
  return (
    <>
      {/* Heading */}
      <div className="bg-primary">
        <div className="container py-4">
          {/* Breadcrumb */}
          <nav className="d-flex">
            <h6 className="mb-0">
              <a href="" className="text-white-50">
                Home
              </a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="" className="text-white-50">
                2. Shopping cart
              </a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="" className="text-white">
                <u>3. Order info</u>
              </a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="" className="text-white-50">
                4. Payment
              </a>
            </h6>
          </nav>
          {/* Breadcrumb */}
        </div>
      </div>
      {/* Heading */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              <div className="card mb-4 border shadow-0">
                <div className="p-4 d-flex justify-content-between">
                  <div className="">
                    <h5>Have an account?</h5>
                    <p className="mb-0 text-wrap ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <a
                      href="#"
                      className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100"
                    >
                      Register
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary shadow-0 text-nowrap w-100"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
              {/* Checkout */}
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Guest checkout</h5>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p className="mb-0">First name</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="mb-0">Last name</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Phone</p>
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="typePhone"
                          defaultValue={+48}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Email</p>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="typeEmail"
                          placeholder="example@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Keep me up to date on news
                    </label>
                  </div>
                  <hr className="my-4" />
                  <h5 className="card-title mb-3">Shipping info</h5>
                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      {/* Default checked radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Express delivery <br />
                            <small className="text-muted">
                              3-4 days via Fedex{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* Default radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Post office <br />
                            <small className="text-muted">
                              20-30 days via post{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* Default radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Self pick-up <br />
                            <small className="text-muted">
                              Come to our shop{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 mb-3">
                      <p className="mb-0">Address</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <p className="mb-0">City</p>
                      <select className="form-select">
                        <option value={1}>New York</option>
                        <option value={2}>Moscow</option>
                        <option value={3}>Samarqand</option>
                      </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <p className="mb-0">House</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0">Postal code</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0">Zip</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Save this address
                    </label>
                  </div>
                  <div className="mb-3">
                    <p className="mb-0">Message to seller</p>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        rows={2}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="float-end">
                    <button className="btn btn-light border">Cancel</button>
                    <button className="btn btn-success shadow-0 border">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
              {/* Checkout */}
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: 320 }}>
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">$195.90</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- $60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ $14.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">$149.90</p>
                </div>
                <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name=""
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary border">
                    Apply
                  </button>
                </div>
                <hr />
                <h6 className="text-dark my-4">Items in cart</h6>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      1
                    </span>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                      style={{ height: 96, width: "96x" }}
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      Gaming Headset with Mic <br />
                      Darkblue color
                    </a>
                    <div className="price text-muted">Total: $295.99</div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      1
                    </span>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                      style={{ height: 96, width: "96x" }}
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      Apple Watch Series 4 Space <br />
                      Large size
                    </a>
                    <div className="price text-muted">Total: $217.99</div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      3
                    </span>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                      style={{ height: 96, width: "96x" }}
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      GoPro HERO6 4K Action Camera - Black
                    </a>
                    <div className="price text-muted">Total: $910.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
