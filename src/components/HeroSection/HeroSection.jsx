import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          Next Generation Electronics
        </span>

        <h1>
          Elevate Everyday Living
        </h1>

        <p>
          Discover premium technology products
          designed to enhance your lifestyle,
          productivity, and entertainment.
        </p>

        <Link
          to="/products"
          className="hero-btn"
        >
          Shop Now
        </Link>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
          alt="Zephyr Electronics"
        />

      </div>

    </section>
  );
}

export default HeroSection;