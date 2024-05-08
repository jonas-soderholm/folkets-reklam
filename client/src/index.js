import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { SharedStateProvider } from "./SharedContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SharedStateProvider>
      <Header />
      <Hero />
    </SharedStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
