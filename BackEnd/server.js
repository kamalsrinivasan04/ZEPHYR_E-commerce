const express = require("express");
const cors = require("cors");

const products =
  require("./products.json");

const app = express();

app.use(cors());

app.use(express.json());

app.get(
  "/api/products",
  (req, res) => {

    res.json(products);

  }
);

app.get(
  "/api/products/:id",
  (req, res) => {

    const id =
      Number(req.params.id);

    const product =
      products.find(
        (item) =>
          item.id === id
      );

    if (!product) {

      return res.status(404)
        .json({
          message:
          "Product Not Found",
        });

    }

    res.json(product);

  }
);

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});