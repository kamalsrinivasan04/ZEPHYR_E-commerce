import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
    >
      <img
        src={product.thumbnail}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
      </p>

      <p className="rating">
        ⭐ {product.rating}
      </p>
    </Link>
  );
}

export default ProductCard;