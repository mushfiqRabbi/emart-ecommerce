"use client";
// import useSWR from 'swr'
import Image from "next/image";
import QuantityController from "../components/QuantityController";
import { useEffect, useState } from "react";

export default function CartItem({
  productId,
  quantity,
  cartItems,
  setCartItems,
}) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRemove = async (e) => {
    e.preventDefault();
    const updatedCartItems = cartItems.filter(
      (product) => product.productId !== productId
    );
    setCartItems(updatedCartItems);
    const res = await fetch("http://localhost:3000/api/removecartitem", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });
    const items = await res.json();
    console.log(items);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/getproduct", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ productId: productId }),
      });
      const product = await res.json();
      // console.log(product);
      setProduct(product);
      setLoading(false);
    })();
  });

  if (!loading) {
    return (
      <div className="row gy-3 mb-4">
        <div className=" col-lg-5">
          <div className="me-lg-5">
            <div className="d-flex">
              <Image
                alt={product?.title}
                src={product?.thumbnail}
                className="border rounded me-3"
                style={{ width: 96, height: 96 }}
                width={96}
                height={96}
              />
              <div className="">
                <a href="#" className="nav-link">
                  {product?.title}
                </a>
                <p className="text-muted">{product?.brand}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap gap-5 gap-md-4 ">
          {/* QuantityController */}

          <QuantityController productId={productId} quantity={quantity} />

          {/* QuantityController */}
          <div className="">
            <p className="h6">
              $
              {(
                product?.price -
                product?.price * (product?.discountPercentage / 100)
              ).toFixed(2)}
            </p>{" "}
            <small className="text-danger text-nowrap">
              <s>${product?.price}</s>{" "}
            </small>
          </div>
        </div>
        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
          <div className="float-md-end">
            <a
              href="#!"
              className="btn btn-light border px-2 icon-hover-primary"
            >
              <i className="fas fa-heart fa-lg px-1 text-secondary" />
            </a>
            <button
              className="btn btn-light border text-danger icon-hover-danger"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gy-3 mb-4">
        <div
          className="placeholder col"
          style={{
            height: "100px",
          }}
        ></div>
      </div>
    );
  }
}
