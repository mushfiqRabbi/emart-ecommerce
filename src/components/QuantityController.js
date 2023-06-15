"use client";
import { useCart } from "../contexts/CartContext";

export default function QuantityController({ productId, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const handleIncrement = (e) => {
    e.preventDefault();
    increaseQuantity(productId);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    if (quantity <= 1) {
      // removeFromCart(productId);
      return;
    }
    decreaseQuantity(productId);
  };
  return (
    <div className="">
      <div className="input-group mb-3" style={{ width: 150 }}>
        <button
          className="btn btn-white border border-secondary px-3"
          type="button"
          id="button-addon1"
          data-mdb-ripple-color="dark"
          onClick={handleDecrement}
        >
          <i className="fas fa-minus" />
        </button>
        <input
          type="text"
          className="form-control text-center border border-secondary"
          // placeholder={14}
          value={quantity}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          readOnly
        />
        <button
          className="btn btn-white border border-secondary px-3"
          type="button"
          id="button-addon2"
          data-mdb-ripple-color="dark"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
}
