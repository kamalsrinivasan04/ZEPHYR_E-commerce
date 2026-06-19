import { useContext } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products.json";

import { CartContext } from "../../context/CartContext";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const product = products.find(
    (item) =>
      item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <section className="pdp">

      <div className="pdp-image">

        <img
          src={product.thumbnail}
          alt={product.name}
        />

      </div>

      <div className="pdp-info">

        <h1>{product.name}</h1>

        <p className="pdp-rating">
          ⭐ {product.rating}
        </p>

        <p className="pdp-price">
          ₹{product.price}
        </p>

        <p>
          {product.description}
        </p>

        <div className="pdp-buttons">

          <button
            className="btn-primary"
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>

          <button
            className="btn-secondary"
          >
            Wishlist
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;