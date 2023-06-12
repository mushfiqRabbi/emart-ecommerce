"use client";

import { useDeferredValue, useRef, useState } from "react";

export default function QuantityController({ productId, quantity }) {
  const quantityRef = useRef(null);
  const [qt, setQt] = useState(quantity);
  // console.log(qt);
  const handleChange = async (e) => {
    e.preventDefault();
    setQt(e.target.value);
    const cart = await fetch("http://localhost:3000/api/updatequantity", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        quantity: quantityRef.current.value,
      }),
    });
    const data = await cart.json();
    console.log(data);
  };
  return (
    <div className="">
      <input
        type="number"
        name="quantity"
        min={1}
        value={qt}
        className="form-control"
        onChange={handleChange}
        ref={quantityRef}
      />
    </div>
  );
}
