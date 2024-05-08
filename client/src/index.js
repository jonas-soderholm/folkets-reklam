// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Hero from "./components/hero/Hero.jsx";
// import ActiveCommercials from "./components/commercials/ActiveCommercials.jsx";
// import reportWebVitals from "./reportWebVitals.js";
// import { SharedStateProvider } from "./SharedContext.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <SharedStateProvider>
//       <Header />
//       <Hero />
//       <ActiveCommercials />
//       <Footer />
//     </SharedStateProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.js";
import reportWebVitals from "./reportWebVitals.js";
import { SharedStateProvider } from "./SharedContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import DonationDetail from "./components/DonationDetail.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
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
          <Route path="/" element={<App />} />
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
