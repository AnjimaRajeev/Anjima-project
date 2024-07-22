// import React from 'react';

// const SocialLinks = () => {
//   return (
//     <div className="social-links-container">
//       <h3>Find Me Online:</h3>
//       <ul className="social-links">
//         <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
//         <li><a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//         <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub</a></li>
//         {/* Add more social media links as needed */}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h3>Find Me Online:</h3>
      <ul className="social-links">
        <li>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        {/* Add more social media links as needed */}
      </ul>
    </div>
  );
};

export default SocialLinks;
