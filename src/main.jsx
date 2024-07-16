import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Index.css";

import { CartProvider } from "./Components/CartContext/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
