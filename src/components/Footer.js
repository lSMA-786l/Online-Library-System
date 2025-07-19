import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <span className="footer-text">View project on</span>
    <a
      className="footer-link"
      href="https://github.com/lSMA-786l/Online-Library-System"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Repository"
    >
      <svg
        className="github-icon"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02A9.18 9.18 0 0112 6.84c.84.004 1.69.11 2.48.32 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.57.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"
          fill="#FFD700"
        />
      </svg>
      <span className="footer-github">GitHub</span>
    </a>
  </footer>
);

export default Footer;