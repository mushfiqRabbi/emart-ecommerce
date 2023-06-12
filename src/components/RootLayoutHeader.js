"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";

export default function RootLayoutHeader() {
  const { data: session, status } = useSession();
  return (
    <header>
      {/* Jumbotron */}
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container">
          <div className="row gy-3">
            {/* Left elements */}
            <div className="col-lg-2 col-sm-4 col-4">
              <Link href="/" className="float-start">
                <p className="fs-2 fw-bold">MShop</p>
              </Link>
            </div>
            {/* Left elements */}
            {/* Center elements */}
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="d-flex float-end">
                {status !== "loading" && !session && (
                  <Link
                    href="/signin-signup"
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                  >
                    {" "}
                    <i className="fas fa-user-alt m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">Sign in</p>{" "}
                  </Link>
                )}

                {status !== "loading" && session && <SignOutButton />}
                <Link
                  href="/wishlist"
                  className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                >
                  {" "}
                  <i className="fas fa-heart m-1 me-md-2" />
                  <p className="d-none d-md-block mb-0">Wishlist</p>{" "}
                </Link>
                <Link
                  href="/cart"
                  className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                >
                  {" "}
                  <i className="fas fa-shopping-cart m-1 me-md-2" />
                  <p className="d-none d-md-block mb-0">My cart</p>{" "}
                </Link>
              </div>
            </div>
            {/* Center elements */}
            {/* Right elements */}
            <div className="col-lg-5 col-md-12 col-12">
              <div className="input-group float-center">
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                  <label className="form-label" htmlFor="form1">
                    Search
                  </label>
                </div>
                <button type="button" className="btn btn-primary shadow-0">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            {/* Right elements */}
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </header>
  );
}
