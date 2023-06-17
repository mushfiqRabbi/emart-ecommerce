"use client";
import Image from "next/image";
import { useProducts } from "../contexts/ProductsContext";
import Link from "next/link";

export default function RecentlyViewedProducts() {
  const { productsLoading, products } = useProducts();
  if (productsLoading) {
    return <p>loading</p>;
  } else
    return (
      <>
        {/* Recently viewed */}
        <section className="mt-5 mb-4">
          <div className="container text-dark">
            <header className="">
              <h3 className="section-title">Recently viewed</h3>
            </header>
            <div className="row gy-3">
              {products.slice(10, 16).map((product) => {
                return (
                  <div className="col-lg-2 col-md-4 col-4" key={product.id}>
                    <Link
                      href={`/products/${product.id_}`}
                      className="img-wrap"
                    >
                      <Image
                        alt={product.title}
                        height={200}
                        width={200}
                        className="img-thumbnail"
                        src={product.thumbnail}
                        style={{
                          height: "150px",
                          width: "200px",
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Recently viewed */}
      </>
    );
}
