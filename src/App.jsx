import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartDrawer from "./components/CartDrawer/CartDrawer";

import AppRoutes from "./routes/AppRoutes";

function App() {

  const [isCartOpen,
    setIsCartOpen] =
    useState(false);

  return (
    <>
      <Navbar
        openCart={() =>
          setIsCartOpen(true)
        }
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
      />

      <main className="app-content">

      <AppRoutes />

      </main>

      <Footer />
    </>
  );
}

export default App;