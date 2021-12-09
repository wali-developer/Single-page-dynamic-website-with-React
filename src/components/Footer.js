import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <h2>Follow Us</h2>
            <div className="social">
              <a href="/">
                <i class="bi bi-github"></i>
              </a>
              <a href="/">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="/">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="/">
                <i class="bi bi-google"></i>
              </a>
            </div>
            <hr />
            <p>Made with &hearts; by Wali Ullah 2021. All right reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
