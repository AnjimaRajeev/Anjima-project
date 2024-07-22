import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  const { title, description, images, liveLink, githubLink, technologies } = project;

  return (
    <div className="project-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Screenshot ${index}`} className="project-screenshot" />
          ))}
        </div>
        <p><strong>Technologies Used:</strong> {technologies}</p>
        <p><a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a></p>
        <p><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </div>
    </div>
  );
};

export default ProjectModal;
