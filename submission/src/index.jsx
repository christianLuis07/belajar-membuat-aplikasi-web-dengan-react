import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";

const element = <h1>Hello World</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
