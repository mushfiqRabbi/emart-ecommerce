"use client";

import Image from "next/image";
import { useHits } from "react-instantsearch-hooks-web";
import { useRouter } from "next/navigation";

export default function Hits({ setSearch }) {
  const { hits, results, sendEvent } = useHits();
  const router = useRouter();
  // console.log(hits);

  function handleClick(e) {
    // console.log(this);
    router.push(`/products/${this}`);
    setSearch("");
  }
  return (
    <div
      className="list-group list-group-light"
      style={{
        margin: "0",
        padding: "0 8px",
        overflow: "hidden",
        borderRadius: "0",
      }}
    >
      {hits.map((product) => {
        return (
          <div
            key={product.id}
            className="border-0 list-group-item list-group-item-action ripple row d-flex align-items-center"
            // aria-current="true"
            style={{
              borderRadius: "0",
              // width: "100%",
              padding: "0",
              margin: "4px 0",
              cursor: "pointer",
            }}
            onClick={handleClick.bind(product.id)}
          >
            <Image
              src={product.thumbnail}
              alt={product?.title}
              width={70}
              height={80}
              className="col-4"
            />
            <div className="col-8" style={{}}>
              <h4
                className="text"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "bolder",
                }}
              >
                {product.title}
              </h4>
              <h3
                style={{
                  fontSize: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {product.brand}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "left",
                }}
              >
                {product.description.slice(0, 80) + "..."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
