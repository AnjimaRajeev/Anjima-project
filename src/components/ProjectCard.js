import React from 'react';

const ProjectCard = ({ title, description, image, category, technologies, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
