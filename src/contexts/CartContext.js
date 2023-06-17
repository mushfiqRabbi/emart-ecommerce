"use client";

import toast from "react-hot-toast";

import { useContext } from "react";
import { createContext, useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useProducts } from "./ProductsContext";
import { useRouter } from "next/navigation";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const { productsLoading, products } = useProducts();
  const { data: session, status } = useSession();
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartLoading, setCartLoading] = useState(true);
  const router = useRouter();

  // const cartTotalPrice = useRef(0);

  const getCartTotalPrice = () => {
    let cartTotalPrice = 0;
    cart.forEach((p2) => {
      cartTotalPrice += p2.quantity * p2.product.price;
    });
    return cartTotalPrice.toFixed(2);
  };
  const getCartTotalDiscount = () => {
    let cartTotalPrice = 0;
    cart.forEach((p2) => {
      cartTotalPrice +=
        p2.quantity *
        (p2.product.price * (p2.product.discountPercentage / 100));
    });
    return cartTotalPrice.toFixed(2);
  };

  const addToCart = (pid, quantity = 1) => {
    if (!session) {
      toast.error("Login to use cart!", { position: "top-center" });
      return router.push("/signin-signup");
    }

    const add = async () => {
      const cartItems = cart;
      const itemIndex = cartItems?.findIndex((p) => {
        return p.productId === pid;
      });
      if (itemIndex >= 0) {
        cartItems[itemIndex] = {
          ...cartItems[itemIndex],
          quantity: cartItems[itemIndex].quantity + quantity,
        };
      } else {
        cartItems.push({
          productId: pid,
          quantity: quantity,
          product: products.find((p) => p.id_ === pid),
        });
      }
      // console.log("local cart: ", cartItems);
      setCart([...cartItems]);

      const res = await fetch("/api/addtocart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: session.user,
          productId: pid,
          quantity: quantity,
        }),
      });
      const data = await res.json();
      // console.log("db cart", data);
    };

    toast.promise(add(), {
      loading: "Adding...",
      success: <b>Success!</b>,
      error: <b>Failed!</b>,
    });
  };

  const removeFromCart = (pid) => {
    const remove = async () => {
      const cartItems = cart;
      const itemIndex = cartItems.findIndex((p) => p.productId === pid);
      // console.log(itemIndex);
      cartItems.splice(itemIndex, 1);
      setCart([...cartItems]);

      const res = await fetch("/api/removecartitem", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          productId: pid,
        }),
      });
    };

    toast.promise(remove(), {
      loading: "Removing...",
      success: <b>Removed!</b>,
      error: <b>Failed!</b>,
    });
  };

  const increaseQuantity = async (pid) => {
    const cartItems = cart;
    const itemIndex = cartItems.findIndex((p) => p.productId === pid);
    // console.log(cartItems);
    cartItems[itemIndex] = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity + 1,
    };
    setCart([...cartItems]);

    const res = await fetch("/api/updatequantity", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: pid,
        quantity: cartItems[itemIndex].quantity,
      }),
    });
  };

  const decreaseQuantity = async (pid) => {
    const cartItems = cart;
    const itemIndex = cartItems.findIndex((p) => p.productId === pid);
    // console.log(cartItems);
    cartItems[itemIndex] = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity - 1,
    };
    setCart([...cartItems]);

    const res = await fetch("/api/updatequantity", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: pid,
        quantity: cartItems[itemIndex].quantity,
      }),
    });
  };
  useEffect(() => {
    if (session?.user && !productsLoading) {
      (async () => {
        const res = await fetch("/api/cart", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(session.user),
        });
        let cartItems = await res?.json();
        if (cartItems?.length === 0) {
          return;
        }
        // console.log("here");
        cartItems = cartItems.map((p) => {
          return {
            ...p,
            product: products.find((p1) => p1.id_ === p.productId),
          };
        });
        setCart([...cartItems]);
        setItemsCount(cartItems.length);
        // console.log(ctp);
        // console.log(cartItems.length);
      })();
    }
    setCartLoading(false);
  }, [session, productsLoading, products]);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartLoading,
        setCartLoading,
        itemsCount,
        setItemsCount,
        cartLoading,
        setCartLoading,
        getCartTotalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
