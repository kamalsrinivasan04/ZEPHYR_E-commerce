import "./ProductSection.css";
import products from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";

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

            <ProductCard
                key={product.id}
                product={product}
            />
            ))}

      </div>

    </section>
  );
}

export default ProductSection;