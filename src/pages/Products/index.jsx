import { useState } from "react";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts =
  products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()          
        );

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  const categories = [
  "All",
  "Audio",
  "Mobile Devices",
  "Wearables",
  "Computing",
  "Smart Home",
  "Accessories",
  "Gaming",
  "Entertainment"
  ];

  return (
    <section
      style={{
        padding: "4rem"
      }}
    >
      <h1>All Products</h1>


      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <div className="category-filters">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>

      <div
        className="products-grid"
      >

        
        {filteredProducts.map((product) => (
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