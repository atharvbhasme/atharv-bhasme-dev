import React from "react";
import "../index.css";

interface SkillCardProps {
  logo: string; // SVG or image URL
  title: string;
  technologies: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ logo, title, technologies }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt="skill-logo" className="skill-icon" />
      <div className="skill-content">
        <h3>{title}</h3>
        <p>({technologies.join(", ")})</p>
      </div>
    </div>
  );
};

export default SkillCard;
