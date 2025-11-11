import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // jika ada

const rootEl = document.getElementById("root");
if (!rootEl)
  throw new Error("Root element #root tidak ditemukan di index.html");
createRoot(rootEl).render(<App />);
