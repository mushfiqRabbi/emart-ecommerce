"use client";
import Image from "next/image";
import { useProducts } from "../contexts/ProductsContext";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Skeleton } from "react-skeleton-generator";

export default function NewProducts() {
  const { productsLoading, products } = useProducts();
  const { addToCart } = useCart();

  function handleClick(e) {
    e.preventDefault();
    // console.log(this);
    addToCart(this);
  }

  const handleAddToWishList = (e) => {
    e.preventDefault();
    toast("Feature coming soon!", {
      icon: "🧩",
      position: "top-center",
    });
  };
  return (
    <>
      {/* Products */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>
          <div className="row">
            {productsLoading &&
              [...Array(8)].map((_, key) => {
                return (
                  <div key={key} className="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div className="card w-100 my-2 shadow-2-strong">
                      <Skeleton.SkeletonThemeProvider>
                        <Skeleton
                          style={{
                            height: "400px",
                          }}
                        />
                      </Skeleton.SkeletonThemeProvider>
                    </div>
                  </div>
                );
              })}
            {!productsLoading &&
              products.slice(50, 58).map((product) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 d-flex"
                    key={product.id_}
                  >
                    <div className="card w-100 my-2 shadow-2-strong">
                      <Link href={`/products/${product.id_}`}>
                        <Image
                          src={product?.thumbnail}
                          className="card-img-top"
                          alt={product?.title}
                          width={250}
                          height={250}
                          style={{ aspectRatio: "1 / 1" }}
                        />
                      </Link>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product?.title}</h5>
                        <p
                          className="card-text"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          ${product.price}
                        </p>
                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <button
                            className="btn btn-primary shadow-0 me-1"
                            onClick={handleClick.bind(product.id_)}
                          >
                            Add to cart
                          </button>
                          <button
                            className="btn btn-light border px-2 pt-2 icon-hover"
                            onClick={handleAddToWishList}
                          >
                            <i className="fas fa-heart fa-lg text-secondary px-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* Products */}
    </>
  );
}
