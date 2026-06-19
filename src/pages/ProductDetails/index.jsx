import { useParams } from "react-router-dom";

import products from "../../data/products.json";

function ProductDetails() {

  const { id } = useParams();

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>

      <h1>{product.name}</h1>

      <img
        src={product.thumbnail}
        alt={product.name}
        width="300"
      />

      <p>
        ₹{product.price}
      </p>

      <p>
        ⭐ {product.rating}
      </p>

      <p>
        {product.description}
      </p>

    </div>
  );
}

export default ProductDetails;