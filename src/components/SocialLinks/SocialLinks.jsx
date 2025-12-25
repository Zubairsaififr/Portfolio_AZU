import React from 'react';
import { 
  FiLinkedin, 
  FiMail, 
  FiGithub, 
  FiTwitter, 
  FiInstagram,
  FiPhone 
} from 'react-icons/fi';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h3 className="social-title">Connect With Me</h3>
      <div className="social-icons">
        
        <a 
          href="https://www.linkedin.com/in/azuka-gazi-330a57168/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FiLinkedin size={28} />
          <span>LinkedIn</span>
        </a>

        <a 
          href="mailto:your.azukagazi123@gmail.com" 
          className="social-icon gmail"
        >
          <FiMail size={28} />
          <span>Gmail</span>
        </a>

        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FiGithub size={28} />
          <span>GitHub</span>
        </a>

        <a 
          href="https://twitter.com/your-handle" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <FiTwitter size={28} />
          <span>Twitter</span>
        </a>

        {/* <a 
          href="tel:+919876543210" 
          className="social-icon phone"
        >
          <FiPhone size={28} />
          <span>Call Me</span>
        </a> */}

      </div>

      <p className="social-note">
        Feel free to reach out for collaborations or opportunities! 🚀
      </p>
    </div>
  );
};

export default SocialLinks;