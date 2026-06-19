import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  return (
    <section
      style={{
        padding: "4rem"
      }}
    >
      <h1>All Products</h1>

      <div
        className="products-grid"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;