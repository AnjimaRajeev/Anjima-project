// import React from 'react';

// const Projects = () => {
//     return (
//         <div className="projects">
//             <h2>Projects</h2>
//             <p>This section details projects with descriptions and outcomes.</p>
//         </div>
//     );
// };

// export default Projects;

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Store selected project data here

  // Mock data for projects (replace with actual data fetching)
  const projects = [
    {
      id: 1,
      title: 'Netflix clone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300',
      category: 'Web Development',
      technologies: 'React, Node.js, MongoDB',
      images: ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example/project1'
    },
    // Add more projects as needed
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>Projects I have worked on!</h2>
      <div className="project-cards">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            category={project.category}
            technologies={project.technologies}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      {showModal && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Projects;
