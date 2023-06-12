"use client";

import { useState } from "react";

export default function QuantityController({ quantity }) {
  const [qt, setQt] = useState(quantity);
  // console.log(qt);
  const handleChange = (e) => {
    e.preventDefault();
    setQt(e.target.value);
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
      />
    </div>
  );
}
