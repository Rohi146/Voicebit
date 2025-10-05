import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/voicebit-logo.svg";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-curve">
        <svg
          width="1200"
          height="96"
          viewBox="0 0 1200 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 90.1119C212.333 6.2786 873.5 -47.208 1197 90.1121"
            stroke="#FFEFDB"
            stroke-width="11"
          />
        </svg>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="left">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo} alt="VoiceBit Logo" className="logo" />
            </Link>
            <p>Your 24/7 AI phone assistant built for restaurants.</p>

            <a
              className="social"
              href="https://www.linkedin.com/company/voicebit/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z"
                  fill="#CE1210"
                />
              </svg>
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="right">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" onClick={handleLinkClick}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Voicebit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
