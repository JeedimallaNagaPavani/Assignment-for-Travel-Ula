import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";
import CostsPage from "./pages/CostsPage";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";
import InclusionsPage from "./pages/InclusionsPage";
import ExclusionsPage from "./pages/ExclusionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      <Route path="/costs" element={<CostsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/inclusions" element={<InclusionsPage />} />
      <Route path="/exclusions" element={<ExclusionsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
