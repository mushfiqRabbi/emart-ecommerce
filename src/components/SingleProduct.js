"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../components/AddToCartButton";
import { useProducts } from "../contexts/ProductsContext";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/navigation";

export default function SingleProduct({ product }) {
  const { gridView, productsLoading } = useProducts();
  const { addToCart } = useCart();
  const router = useRouter();
  // const description = product.description.slice(0, 25);

  const handleBuyThis = (e) => {
    e.preventDefault();
    addToCart(product.id_);
    router.push("/cart");
  };
  if (gridView) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2 shadow-2-strong">
          <Link href={`/products/${product.id_}`}>
            <Image
              src={product.thumbnail}
              width={200}
              height={200}
              alt={`${product.title} image`}
              className="card-img-top"
            />
          </Link>
          {/* <img src={product.thumbnail} className="card-img-top" /> */}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-semibold">{product.title}</h5>
            <div className="d-flex flex-row">
              <h5 className="mb-1 me-1">
                $
                {(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}
              </h5>
              <span className="text-danger">
                <s>${product.price}</s>
              </span>
            </div>
            {
              <p className="card-text">
                {product.description.slice(0, 40) + " ..."}
              </p>
            }
            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <AddToCartButton product={product} />
              <a
                href="#!"
                className="btn btn-light border icon-hover px-2 pt-2"
              >
                <i className="fas fa-heart fa-lg text-secondary px-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <Image
                      src={product.thumbnail}
                      width={200}
                      height={200}
                      alt={product.title}
                      className="h-full w-full"
                    />
                    <Link href={`/products/${product.id_}`}>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>{product.title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      {[...Array(Math.floor(product.rating.toFixed(1)))].map(
                        (e, i) => {
                          return <i className="fa fa-star" key={i} />;
                        }
                      )}
                      {/* <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" /> */}
                      {product.rating.toFixed(1) -
                        Math.round(product.rating).toFixed(1) !==
                        0 && <i className="fas fa-star-half-alt" />}
                      <span className="ms-1">{product.rating.toFixed(1)}</span>
                    </div>
                    {/* <span className="text-muted">154 orders</span> */}
                  </div>
                  <p className="text mb-4 mb-md-0">{product.description}</p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">
                      $
                      {(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </h4>
                    <span className="text-danger">
                      <s>${product.price}</s>
                    </span>
                  </div>
                  {Math.round(Math.random() * 100) % 3 === 0 && (
                    <h6 className="text-success">Free shipping</h6>
                  )}
                  <div className="mt-4">
                    <button
                      className="btn btn-primary shadow-0 me-1"
                      type="button"
                      onClick={handleBuyThis}
                    >
                      Buy this
                    </button>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
