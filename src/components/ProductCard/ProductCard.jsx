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

      <div className="price-section">

        <span className="sale-price">
          ₹{product.price}
        </span>

        <span className="mrp-price">
          ₹{product.originalPrice}
        </span>

        <span className="discount-badge">
          {product.discountPercentage}% OFF
        </span>

      </div>

      <p className="rating">
        ⭐ {product.rating}
      </p>
    </Link>
    
  );

}

export default ProductCard;