import "./ProductSection.css";
import products from "../../data/products.json";

function ProductSection() {

  const featuredProducts =
    products.filter(
      (product) => product.featured
    );

  return (
    <section className="products-section">

      <h2>Featured Products</h2>

      <div className="products-grid">

        {featuredProducts.map((product) => (

          <div
            key={product.id}
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

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductSection;