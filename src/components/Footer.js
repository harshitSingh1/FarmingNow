import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section 
        className="newsletter" 
        id="newsletter" 
        style={{ background: `url(images/background.jpg) no-repeat center center`, backgroundSize: 'cover' }}
      >
        <span>Get our all updates easily</span>
        <h3>Subscribe to our newsletter</h3>
        <form action="#">
          <input type="email" name="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer" style={{ 
        background: `url(images/footer.jpg) no-repeat center center`, 
        backgroundSize: 'cover' 
      }}>
        <div className="about">
          <img src="images/logo.png" alt="Logo" />
          <p>FarmingNow © 2024 | Empowering farmers with data-driven insights and tools to optimize their agricultural practices. Together, we're cultivating a smarter future for sustainable farming.</p>
        </div>

        <div className="quick-links">
          <h3>Quick links</h3>
          <a href="#features">Features</a>
          <a href="#products">Products</a>
          <a href="#blogs">Blogs</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">T&C</a>
          <a href="#">Policies</a>
        </div>

        <div className="contacts">
          <h3>Contact Information</h3>
          <div className="address">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <p>302 Sevagiri Nagar, Pandharpur, Maharashtra, India-415 504</p>
          </div>

          <div className="cll">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>+123-456-7890</p>
          </div>

          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>email@email.com</p>
          </div>
        </div>

        <div className="s-media">
          <h3>Stay connected</h3>
          <div className="s-icon">
            <a href="https://www.facebook.com/NASA/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <p>Facebook</p>
          </div>

          <div className="s-icon">
            <a href="https://x.com/NASA" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <p>Twitter</p>
          </div>

          <div className="s-icon">
            <a href="https://www.instagram.com/nasa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <p>Instagram</p>
          </div>

          <div className="s-icon">
            <a href="https://github.com/harshitSingh1/FarmingNow" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <p>Github</p>
          </div>
        </div>
      </footer>

      <section className="copyright" id="copyright">
        <div className="footer-2">
          <div className="copy">
            Copyright ©2024 All rights reserved | By <span>FarmingNow</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
