import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/voicebit-logo.svg";
import "react-phone-input-2/lib/style.css";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const isActive = (path) => (location.pathname === path ? "active" : "");

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
    setSubmitError("");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="padding-inline pad-blk">
      <div className="header">
        <div className="logo-container">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Voicebit official logo – AI voice assistant for restaurants"
              className="logo"
            />
          </Link>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className={`nav-link ${isActive("/how-it-works")}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            How It Works
          </Link>
          <Link
            to="/about-us"
            className={`nav-link ${isActive("/about-us")}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About Us
          </Link>
          <div className="menu-border"></div>
          {isMobileMenuOpen && (
            <button className="demo-button" onClick={openPopup}>
              Book a Demo
            </button>
          )}
        </nav>
        <div className="header-actions">
          <button className="demo-button" onClick={openPopup}>
            Book a Demo
          </button>
          <div className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "×" : "≡"}
          </div>
        </div>
      </div>


    {isPopupOpen && (
        <ContactForm
          isOpen={isPopupOpen}
          onClose={closePopup}
          onSubmitSuccess={() => {
            setIsSubmitted(true);
            setSubmitError("");
          }}
        />
      )}
    </header>
  );
};


export default Header;