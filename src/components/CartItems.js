"use client";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useRouter } from "next/navigation";

export default function CartItems({ items }) {
  // router.refresh();
  if (items.length > 0) {
    return (
      <>
        {items.map((item, index) => {
          return <CartItem key={item.productId} item={item} />;
        })}
      </>
    );
  }
}
