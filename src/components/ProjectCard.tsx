import React from "react";
import '../App.css'

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  link,
  technologies,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-content">
        <h3>{name}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
        <div className="tech-list">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
