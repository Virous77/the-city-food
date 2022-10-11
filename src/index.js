import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./store/StateProvider";
import { FormProvider } from "./store/formContext";
import { CartProvider } from "./store/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <FormProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FormProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
