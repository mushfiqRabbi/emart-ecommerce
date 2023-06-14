"use client";
import SingleProduct from "./SingleProduct";

export default function AllProducts({ products }) {
  return products.map((product) => {
    return <SingleProduct key={product.id} product={product} />;
  });
}
