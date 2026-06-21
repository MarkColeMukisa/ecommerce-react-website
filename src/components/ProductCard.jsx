import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductCard = () => {
  const products = getProducts();

  return (
    <div className="container">
      <h2 className="page-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
            />{" "}
            <div className="product-card-content">
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-price">UGX {product.price}</p>

              <div className="product-card-actions">
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-secondary"
                >
                  View Details
                </Link>
                <AddToCartButton productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
