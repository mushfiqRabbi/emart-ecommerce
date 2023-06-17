"use client";
import Image from "next/image";
import { useProducts } from "../contexts/ProductsContext";
import Link from "next/link";

export default function RecommendedProducts() {
  const { productsLoading, products } = useProducts();
  if (productsLoading) {
    return <p>loading</p>;
  } else
    return (
      <>
        {/* Recommended */}
        <section>
          <div className="container my-5">
            <header className="mb-4">
              <h3>Recommended</h3>
            </header>
            <div className="row">
              {
                products
                  .filter((product) => product.rating > 4.9)
                  .slice(0, 4)
                  .map((product) => {
                    return (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6"
                        key={product.id_}
                      >
                        <div className="card my-2 shadow-0">
                          <Link href={`/products/${product.id_}`} className="">
                            <Image
                              src={product?.thumbnail}
                              alt={product?.title}
                              width={250}
                              height={250}
                              className="card-img-top rounded-2"
                              style={{ aspectRatio: "1 / 1" }}
                            />
                          </Link>
                          <div className="card-body p-0 pt-3">
                            <a
                              href="#!"
                              className="btn btn-light border px-2 pt-2 float-end icon-hover"
                            >
                              <i className="fas fa-heart fa-lg px-1 text-secondary" />
                            </a>
                            <h5 className="card-title">${product?.price}</h5>
                            <p className="card-text mb-0">{product?.title}</p>
                            <p className="text-muted">{product?.brand}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                // console.log(product);
              }
            </div>
          </div>
        </section>
        {/* Recommended */}
      </>
    );
}
