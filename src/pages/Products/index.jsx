import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../../data/products.json";

import ProductCard from "../../components/ProductCard/ProductCard";

import "./Products.css";

function Products() {

  const [searchParams] =
    useSearchParams();

  const categoryFromURL =
    searchParams.get("category");

  const [selectedCategory,
    setSelectedCategory] =
    useState(
      categoryFromURL || "All"
    );

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [sortOption,
    setSortOption] =
    useState("default");

  useEffect(() => {

    if(categoryFromURL){

      setSelectedCategory(
        categoryFromURL
      );

    }

  }, [categoryFromURL]);


  const categories = [

    "All",

    "Audio",

    "Mobile Devices",

    "Wearables",

    "Computing",

    "Smart Home",

    "Accessories",

    "Gaming",

    "Entertainment",
  ];


  const filteredProducts =
    products

      .filter((product) => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const matchesCategory =

          selectedCategory === "All"

            ? true

            : product.category ===
              selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      })

      .sort((a, b) => {

        if (
          sortOption ===
          "price-low"
        ) {

          return a.price - b.price;
        }

        if (
          sortOption ===
          "price-high"
        ) {

          return b.price - a.price;
        }

        if (
          sortOption ===
          "rating"
        ) {

          return b.rating - a.rating;
        }

        return 0;
      });


  return (

    <section
      className="products-page"
    >

      <h1>

        {selectedCategory === "All"

          ? "All Products"

          : `${selectedCategory} Products`}

      </h1>


      <p className="products-subtitle">

        Showing
        {" "}
        {filteredProducts.length}
        {" "}
        products

      </p>


      <input

        className="search-input"

        type="text"

        placeholder="Search products..."

        value={searchTerm}

        onChange={(e) =>

          setSearchTerm(
            e.target.value
          )
        }

      />


      <div className="category-filters">

        {categories.map(
          (category) => (

            <button

              key={category}

              className={
                selectedCategory ===
                category

                  ? "category-btn active"

                  : "category-btn"
              }

              onClick={() =>
                setSelectedCategory(
                  category
                )
              }

            >

              {category}

            </button>
          )
        )}

      </div>


      <div className="sort-container">

        <select

          className="sort-select"

          value={sortOption}

          onChange={(e) =>
            setSortOption(
              e.target.value
            )
          }

        >

          <option value="default">
            Default
          </option>

          <option value="price-low">
            Price Low → High
          </option>

          <option value="price-high">
            Price High → Low
          </option>

          <option value="rating">
            Rating High → Low
          </option>

        </select>

      </div>


      <div className="products-grid">

        {filteredProducts.map(
          (product) => (

            <ProductCard

              key={product.id}

              product={product}

            />
          )
        )}

      </div>

    </section>
  );
}

export default Products;