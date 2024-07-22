// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About Me</Link></li>
//                     <li><Link to="/achievements">Achievements</Link></li>
//                     <li><Link to="/skills">Skills</Link></li>
//                     <li><Link to="/projects">Projects</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/testimonials">Testimonials</Link></li>
//                     <li><Link to="/portfolio">Portfolio</Link></li>
//                     <li><Link to="/certifications">Certifications</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
