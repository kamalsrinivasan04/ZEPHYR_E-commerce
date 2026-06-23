import "./ProductSection.css";

import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../ProductCard/ProductCard";

function ProductSection() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/products"
      )

      .then((response) => {

        const featuredProducts =
          response.data.filter(
            (product) =>
              product.featured
          );

        setProducts(
          featuredProducts
        );

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <section className="products-section">

      <h2>
        Featured Products
      </h2>

      <div className="products-grid">

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

export default ProductSection;