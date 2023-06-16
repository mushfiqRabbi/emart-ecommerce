"use client";
import Hits from "./Hits";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { useState } from "react";
import { forwardRef } from "react";
import { MDBInput } from "mdb-react-ui-kit";

const Search = forwardRef(function Search({ search, setSearch }, ref) {
  const { query, refine } = useSearchBox();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    refine(e.target.value);
    // console.log(query);
  };
  return (
    <div className="col-lg-5 col-md-12 col-12">
      <div className="input-group float-center">
        <div
          className="form-outline"
          style={{
            position: "relative",
          }}
        >
          <MDBInput
            type="search"
            id="form1"
            // className="form-control "
            label="Search"
            value={search}
            onChange={handleChange}
          />

          {/* <input
          /> */}
          {/* <label className="form-label" htmlFor="form1">
            Search
          </label> */}
          <div
            className="col-lg-5 col-md-12 col-12 shadow-5 bg-light"
            style={{
              position: "absolute",
              top: "110%",
              width: "100%",
              zIndex: "100",
              maxHeight: "80vh",
              overflowY: "scroll",
            }}
            ref={ref}
          ></div>
          {/* <Hits /> */}
        </div>
        <button type="button" className="btn btn-primary shadow-0">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
});

export default Search;
