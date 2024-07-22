// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Login from './components/Login';
// import Settings from './components/Settings';
// import IndexPage from './components/IndexPage';
// import AboutMe from './components/AboutMe';
// import Achievements from './components/Achievements';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Blog from './components/Blog';
// import Testimonials from './components/Testimonials';
// import PortfolioGallery from './components/PortfolioGallery';
// import Certifications from './components/Certifications';

// function App() {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" exact component={Login} />
//                 <Route path="/settings" component={Settings} />
//                 <Route path="/index" component={IndexPage} />
//                 <Route path="/about" component={AboutMe} />
//                 <Route path="/achievements" component={Achievements} />
//                 <Route path="/skills" component={Skills} />
//                 <Route path="/projects" component={Projects} />
//                 <Route path="/contact" component={Contact} />
//                 <Route path="/blog" component={Blog} />
//                 <Route path="/testimonials" component={Testimonials} />
//                 <Route path="/portfolio" component={PortfolioGallery} />
//                 <Route path="/certifications" component={Certifications} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Settings from './components/Settings';
import IndexPage from './components/IndexPage';
import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import PortfolioGallery from './components/PortfolioGallery';
import Certifications from './components/Certifications';
import './styles/styles.css';

function App() {
    const userName = "John Doe";
    const userPhoto = "https://example.com/user-photo.jpg";
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<IndexPage userName={userName} userPhoto={userPhoto} />} />
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/portfolio" element={<PortfolioGallery />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;

