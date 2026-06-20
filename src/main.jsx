import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter }
  from "react-router-dom";

import App from "./App";

import "./styles/global.css";

import {
  CartProvider,
} from "./context/CartContext";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import {
  WishlistProvider,
} from "./context/WishlistContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ThemeProvider>

      <WishlistProvider>

        <CartProvider>

          <BrowserRouter>

            <App />

          </BrowserRouter>

        </CartProvider>

      </WishlistProvider>

    </ThemeProvider>

  </React.StrictMode>

);