import { useContext } from "react";

import { Link } from "react-router-dom";

import { WishlistContext }
  from "../../context/WishlistContext";

import ProductCard
  from "../../components/ProductCard/ProductCard";

function Wishlist() {

  const {
    wishlistItems,
  } = useContext(
    WishlistContext
  );

  return (

    <section
      className="products-page"
    >

      <h1>
        My Wishlist
      </h1>

      <p className="products-subtitle">

        {wishlistItems.length}

        {" "}products saved

      </p>


      {wishlistItems.length === 0 ? (

        <div
          style={{
            textAlign:"center",
            padding:"4rem 0",
          }}
        >

          <h2>
            Your Wishlist is Empty
          </h2>

          <p
            style={{
              marginTop:"1rem",
            }}
          >
            Save products you love
            and access them later.
          </p>

          <Link
            to="/products"

            style={{
              display:"inline-block",

              marginTop:"2rem",

              padding:
              "1rem 2rem",

              background:
              "var(--primary)",

              color:"white",

              borderRadius:
              "var(--radius)",
            }}
          >

            Explore Products

          </Link>

        </div>

      ) : (

        <div
          className="products-grid"
        >

          {wishlistItems.map(
            (product) => (

              <ProductCard

                key={product.id}

                product={product}

              />

            )
          )}

        </div>

      )}

    </section>

  );
}

export default Wishlist;