import { useContext, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";
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
  const [selectedImage,
  setSelectedImage] =
  useState(0);

  const [showPreview,
  setShowPreview] =
  useState(false);

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

        <div className="main-image-container">

          <button
            className="image-nav prev"
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? product.images.length - 1
                  : selectedImage - 1
              )
            }
          >
            <FaChevronLeft />
          </button>

          <img
            className="main-image"
            src={
              product.images[
                selectedImage
              ]
            }
            alt={product.name}
            onClick={() =>
              setShowPreview(true)
            }
          />

          <button
            className="image-nav next"
            onClick={() =>
              setSelectedImage(
                selectedImage ===
                product.images.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="image-gallery">

          {product.images.map(
            (image, index) => (

              <img
                key={index}
                src={image}
                alt={product.name}
                className={
                  selectedImage === index
                    ? "gallery-thumb active"
                    : "gallery-thumb"
                }
                onClick={() =>
                  setSelectedImage(index)
                }
              />

            )
          )}

        </div>

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

    {showPreview && (

      <div className="image-preview">

        <button
          className="close-preview"
          onClick={() =>
            setShowPreview(false)
          }
        >
          <FaTimes />
        </button>

        <button
          className="preview-nav prev"
          onClick={() =>
            setSelectedImage(
              selectedImage === 0
                ? product.images.length - 1
                : selectedImage - 1
            )
          }
        >
          <FaChevronLeft />
        </button>

        <img
          src={
            product.images[
              selectedImage
            ]
          }
          alt={product.name}
          className="preview-image"
        />

        <button
          className="preview-nav next"
          onClick={() =>
            setSelectedImage(
              selectedImage ===
              product.images.length - 1
                ? 0
                : selectedImage + 1
            )
          }
        >
          <FaChevronRight />
        </button>

      </div>

    )}

    </section>
  );
}

export default ProductDetails;