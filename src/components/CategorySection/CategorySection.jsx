import "./CategorySection.css";

function CategorySection() {

  const categories = [
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
    <section className="categories">

      <h2>Shop By Category</h2>

      <div className="category-grid">

        {categories.map((category) => (
          <div
            key={category}
            className="category-card"
          >
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;