import React from 'react';
import "./footer.css";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2>BOTOL</h2>
        </div>

        {/* Main Navigation */}
        <div className="footer-nav">
          <ul className="main-links">
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/journal">Journal</a></li>
            <li><a href="/custom">Custom</a></li>
          </ul>
        </div>

        {/* Secondary Navigation */}
        <div className="footer-secondary-nav">
          <ul className="secondary-links">
            <li><a href="/faqs">FAQ's</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/ordering">Ordering</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/policies">Personalization Policies</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://x.com" aria-label="Twitter">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;