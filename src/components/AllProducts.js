import SingleProduct from "./SingleProduct";

export default function AllProducts({ products, productView }) {
  return products.map((product) => {
    return (
      <SingleProduct
        key={product.id}
        product={product}
        productView={productView}
      />
    );
  });
}
