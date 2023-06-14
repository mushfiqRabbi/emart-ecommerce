"use client";
import { useSession } from "next-auth/react";
import { useCart } from "../contexts/CartContext";

export default function AddToCartButton({ product }) {
  const { data: session, status } = useSession();
  const { addToCart } = useCart();

  const handleAddToCart = async (e) => {
    addToCart(product.id_);
    // const res = await fetch("/api/addtocart", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: session.user,
    //     productId: product.id_,
    //   }),
    // });
    // const data = await res.json();
    // // console.log(data);
  };
  return (
    <button className="btn btn-primary shadow-0 me-1" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}
