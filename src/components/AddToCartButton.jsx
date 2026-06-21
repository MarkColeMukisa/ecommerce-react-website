import { useCart } from "../context/cart-context";

const AddToCartButton = ({ productId }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === productId);
  const quantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <button className="btn btn-primary" onClick={() => addToCart(productId)}>
      Add to Cart {quantityLabel}
    </button>
  );
};

export default AddToCartButton;
