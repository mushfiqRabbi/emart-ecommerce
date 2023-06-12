"use client";
import { useSession } from "next-auth/react";

export default function AddToCartButton({ product }) {
  const { data: session, status } = useSession();

  const handleAddToCart = async (e) => {
    const res = await fetch("/api/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: session.user,
        productId: product.id_,
      }),
    });
  };
  return (
    <button className="btn btn-primary shadow-0 me-1" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}
