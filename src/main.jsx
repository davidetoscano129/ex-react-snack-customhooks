import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Snack1 from "./Snack1.jsx";
import Snack2 from "./Snack2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Snack1 />
    <Snack2 />
  </StrictMode>
);
