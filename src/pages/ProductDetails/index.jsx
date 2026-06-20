import { useContext } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products.json";

import { CartContext }
  from "../../context/CartContext";

import { WishlistContext }
  from "../../context/WishlistContext";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const {
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const {
    toggleWishlist,
    isWishlisted,
  } = useContext(
    WishlistContext
  );

  const product = products.find(
    (item) =>
      item.id === Number(id)
  );

  const cartItem =
    cartItems.find(
      (item) =>
        item.id === product?.id
    );

  if (!product) {
    return (
      <h1>
        Product Not Found
      </h1>
    );
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

          <div className="pdp-cart-controls">

            {!cartItem ? (

              <button
                className="btn-primary"
                onClick={() =>
                  addToCart(product)
                }
              >

                Add To Cart

              </button>

            ) : (

              <div
                className="quantity-controls"
              >

                <button
                  onClick={() =>
                    decreaseQuantity(
                      product.id
                    )
                  }
                >
                  -
                </button>

                <span>
                  {cartItem.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(
                      product.id
                    )
                  }
                >
                  +
                </button>

              </div>

            )}

          </div>


          <button

            className="btn-secondary"

            onClick={() =>
              toggleWishlist(
                product
              )
            }

          >

            {isWishlisted(
              product.id
            )

              ? "Remove Wishlist"

              : "Add Wishlist"}

          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;