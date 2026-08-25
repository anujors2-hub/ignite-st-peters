import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import V2App from "./V2App";
import V3App from "./V3App";
import "./styles.css";
import "./v2-styles.css";
import "./v3-styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/v2" element={<V2App />} />
        <Route path="/v3" element={<V3App />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
