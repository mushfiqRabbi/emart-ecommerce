"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center bg-white"
      onClick={() => {
        signOut();
      }}
    >
      {" "}
      <i className="fas fa-right-from-bracket m-1 me-md-2" />
      <p className="d-none d-md-block mb-0">Sign out</p>{" "}
    </button>
  );
}
