import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/pages/HomePage.js";
import reportWebVitals from "./reportWebVitals.js";
import { SharedStateProvider } from "./SharedContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import DonationDetail from "./components/pages/DonationDetail.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SharedStateProvider>
      <Header />
      <Router>
        {/* Use Routes to contain Route components */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donations/:id" element={<DonationDetail />} />
          {/* Define a catch-all route for 404 pages */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </SharedStateProvider>
  </React.StrictMode>
);

reportWebVitals();
