import "./Footer.css";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <h3>ZEPHYR</h3>

        <p>
          Elevate Everyday Living
        </p>

      </div>

      <div className="footer-links">

        <a href="#">
          Privacy Policy
        </a>

        <a href="#">
          Terms Of Service
        </a>

        <a href="#">
          Shipping Policy
        </a>

      </div>

      <div className="footer-social">

        <FaInstagram />

        <FaFacebook />

        <FaLinkedin />

        <FaYoutube />

      </div>

    </footer>
  );
}

export default Footer;