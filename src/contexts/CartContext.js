"use client";

import { useContext } from "react";
import { createContext, useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useProducts } from "./ProductsContext";

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

  const addToCart = async (pid) => {
    const cartItems = cart;
    const itemIndex = cartItems?.findIndex((p) => {
      return p.productId === pid;
    });
    if (itemIndex >= 0) {
      cartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + 1,
      };
    } else {
      cartItems.push({
        productId: pid,
        quantity: 1,
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
      }),
    });
    const data = await res.json();
    // console.log("db cart", data);
  };

  const removeFromCart = async (pid) => {
    const cartItems = cart;
    const itemIndex = cartItems.findIndex((p) => p.productId === pid);
    // console.log(itemIndex);
    cartItems.splice(itemIndex, 1);
    setCart([...cartItems]);

    const res = await fetch("http://localhost:3000/api/removecartitem", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: pid,
      }),
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

    const res = await fetch("http://localhost:3000/api/updatequantity", {
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

    const res = await fetch("http://localhost:3000/api/updatequantity", {
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
        const res = await fetch("http://localhost:3000/api/cart", {
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
