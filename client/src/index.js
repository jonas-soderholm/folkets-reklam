import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/pages/HomePage.js";
import reportWebVitals from "./reportWebVitals.js";
import { SharedStateProvider } from "./SharedContext.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import Routes
import DonationDetail from "./components/pages/DonationDetail.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <React.StrictMode>
      <SharedStateProvider>
        <Router>
          <AppContent />
        </Router>
      </SharedStateProvider>
    </React.StrictMode>
  );
};

// No footer/header render on page not found
const AppContent = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDonationDetailPage = location.pathname.startsWith("/donations/");
  const isAbout = location.pathname.startsWith("/om");
  const isContact = location.pathname.startsWith("/kontakt");

  return (
    <>
      {isHomePage || isDonationDetailPage || isAbout || isContact ? <Header /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donations/:id" element={<DonationDetail />} />
        <Route path="/om" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isHomePage || isDonationDetailPage || isAbout || isContact ? <Footer /> : null}
    </>
  );
};

root.render(<App />);
reportWebVitals();
