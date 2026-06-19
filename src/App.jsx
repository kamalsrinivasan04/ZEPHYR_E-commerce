import products from "./data/products.json";

function App() {
  console.log(products);

  return (
    <>
      <h1>Zephyr</h1>
      <p>Total Products: {products.length}</p>
    </>
  );
}

export default App;