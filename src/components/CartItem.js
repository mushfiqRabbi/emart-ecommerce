"use client";
// import useSWR from 'swr'
import Image from "next/image";
import QuantityController from "../components/QuantityController";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-hot-toast";

export default function CartItem({ item }) {
  const { product, productId, quantity } = item;
  const { removeFromCart } = useCart();

  const handleRemove = async (e) => {
    e.preventDefault();
    removeFromCart(productId);
  };

  const handleAddToWishList = (e) => {
    e.preventDefault();
    toast("Feature coming soon!", {
      icon: "🧩",
      position: "top-center",
    });
  };

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
      <div className="col-lg-3 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap gap-3 gap-md-3 ">
        {/* QuantityController */}

        <QuantityController productId={productId} quantity={quantity} />

        {/* QuantityController */}
        <div className="">
          <p className="h6">
            $
            {(
              (product?.price -
                product?.price * (product?.discountPercentage / 100)) *
              quantity
            ).toFixed(2)}
          </p>{" "}
          <small className="text-danger text-nowrap">
            <s>${product?.price}</s>{" "}
          </small>
        </div>
      </div>
      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
        <div className="float-md-end">
          <button
            className="btn btn-light border px-2 icon-hover-primary me-2"
            onClick={handleAddToWishList}
          >
            <i className="fas fa-heart fa-lg px-1 text-secondary" />
          </button>
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
}
