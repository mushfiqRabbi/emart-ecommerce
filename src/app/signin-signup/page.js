"use client";

import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import { useState } from "react";

export default function SignInSignUp() {
  const [tab, setTab] = useState("login");

  const handTabClick = (e) => {
    e.preventDefault();
    setTab(e.target.textContent.toLowerCase());
  };
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col col-md-6">
            {/* Pills navs */}
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${tab === "login" ? "active" : ""}`}
                  id="tab-login"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  onClick={handTabClick}
                >
                  Login
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${tab === "register" ? "active" : ""}`}
                  id="tab-register"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  onClick={handTabClick}
                >
                  Register
                </a>
              </li>
            </ul>
            {/* <hr /> */}
            {/* Pills navs */}
            {/* Pills content */}
            <div className="tab-content card p-5 shadow-5">
              <SignInForm tab={tab} setTab={setTab} />

              <SignUpForm tab={tab} setTab={setTab} />
            </div>
            {/* Pills content */}
          </div>
        </div>
      </div>
    </>
  );
}
