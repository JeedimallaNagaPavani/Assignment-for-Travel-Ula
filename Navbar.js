import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/itinerary">Itinerary</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/terms">Terms</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
