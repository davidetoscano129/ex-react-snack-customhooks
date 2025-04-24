import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Snack1 from "./Snack1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Snack1 />
  </StrictMode>
);
