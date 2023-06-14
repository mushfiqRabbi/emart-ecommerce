import ProductsProvider from "./ProductsContext";
import CartProvider from "./CartContext";

export default function AllContext({ children }) {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
}
