import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { getProductById } from "../data/products";

const formatCurrency = (amount) => `UGX ${amount.toLocaleString()}`;

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const {
    cartItems,
    addToCart,
    decreaseCartItemQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const checkoutItems = cartItems
    .map((cartItem) => {
      const product = getProductById(cartItem.id);

      return product ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean);

  const subtotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function placeOrder() {
    if (checkoutItems.length === 0) {
      return;
    }

    clearCart();
    setOrderPlaced(true);
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>

        {orderPlaced ? (
          <div className="order-success">
            <h2>Order placed successfully!</h2>
            <p>Thanks for shopping with ShopHub.</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : checkoutItems.length === 0 ? (
          <div className="order-success">
            <h2>Your cart is empty</h2>
            <p>Add products to your cart before checking out.</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="checkout-container">
            <section className="checkout-items">
              <h2 className="checkout-section-title">Order Summary</h2>

              {checkoutItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="checkout-item-image"
                  />

                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{item.name}</h3>
                    <p className="checkout-item-price">
                      {formatCurrency(item.price)} each
                    </p>
                  </div>

                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="quantity-btn"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decreaseCartItemQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="quantity-btn"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <p className="checkout-item-total">
                      {formatCurrency(item.price * item.quantity)}
                    </p>

                    <button
                      type="button"
                      className="btn btn-secondary btn-small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </section>

            <aside className="checkout-summary">
              <h2 className="checkout-section-title">Total</h2>

              <div className="checkout-total">
                <span className="checkout-total-label">Subtotal:</span>
                <span className="checkout-total-value">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="checkout-total">
                <span className="checkout-total-label">Total:</span>
                <span className="checkout-total-value checkout-total-final">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
