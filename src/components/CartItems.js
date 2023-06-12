"use client";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useRouter } from "next/navigation";

export default function CartItems({ items }) {
  const [cartItems, setCartItems] = useState(items);
  const router = useRouter();
  // router.refresh();
  useEffect(() => {
    router.refresh();
  }, [router]);

  if (cartItems) {
    return (
      <>
        {cartItems.map((product) => {
          return (
            <CartItem
              key={product.productId}
              productId={product.productId}
              quantity={product.quantity}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </>
    );
  }
}
