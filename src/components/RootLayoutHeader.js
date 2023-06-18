"use client";
import Search from "./Search";
import Hits from "./Hits";

import { useRef } from "react";
import { useState } from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "2VLVGEQHRD",
  "6aa570869070b2fe7fe55409f6ddfcce"
);

import { useSession } from "next-auth/react";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";
import { createPortal } from "react-dom";
import { toast } from "react-hot-toast";

export default function RootLayoutHeader() {
  const hitsContainer = useRef(null);
  const { data: session, status } = useSession();
  const [search, setSearch] = useState("");

  const handleWishListClick = (e) => {
    e.preventDefault();
    toast("Feature coming soon!", {
      icon: "🧩",
    });
  };
  return (
    <header>
      {/* Jumbotron */}
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container">
          <div className="row gy-3">
            {/* Left elements */}
            <div className="col-lg-2 col-sm-4 col-4">
              <Link href="/" className="float-start">
                <p className="fs-2 fw-bold">eMart</p>
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
                <button
                  className="bg-white me-1 border rounded py-1 px-3 nav-link d-flex align-items-center "
                  onClick={handleWishListClick}
                  // disabled
                >
                  {" "}
                  <i className="fas fa-heart m-1 me-md-2" />
                  <p className="d-none d-md-block mb-0">Wishlist</p>{" "}
                </button>
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
            <InstantSearch searchClient={searchClient} indexName="emart">
              <Search
                ref={hitsContainer}
                search={search}
                setSearch={setSearch}
              />
              {search &&
                hitsContainer?.current &&
                createPortal(
                  <Hits setSearch={setSearch} />,
                  hitsContainer.current
                )}
              {/* <Hits /> */}
            </InstantSearch>
            {/* Right elements */}
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </header>
  );
}
