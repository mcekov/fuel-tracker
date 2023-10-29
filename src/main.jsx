import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { FuelExpenseProvider } from "./context/FuelExpenseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FuelExpenseProvider>
    <App />
  </FuelExpenseProvider>
);
