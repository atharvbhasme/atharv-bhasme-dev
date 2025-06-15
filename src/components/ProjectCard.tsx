import React from "react";
import '../index.css'

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
  technologies: string[];
  isEng: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  link,
  technologies,
  isEng
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-content">
        <h3 className="project-card-header">{name}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          {isEng ? 'View Project':'प्रकल्प पहा'}
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
