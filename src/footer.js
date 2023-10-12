import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5><b>Contact Us</b></h5>
            <hr />
            <ul className="list-unstyled">
              <li>travelbliss@gmail.com 📩</li>
              <li><i>Amman, Jordan </i>📌</li>
              <li>123 Street</li>
              <hr />
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5><b>Social Media</b></h5>
            <hr />
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/travelbliss" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/travelbliss" target="_blank" rel="noopener noreferrer">
                  <FaInstagram /> Instagram
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/travelbliss" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> Linkedin
                </a>
                <hr />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            <b>&copy;{new Date().getFullYear()}</b> | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;