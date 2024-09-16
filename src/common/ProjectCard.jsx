import React from "react";
import "./ProjectCard.css"; // Pastikan ada file CSS untuk styling

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-image-container">
          <img className="card-image" src={src} alt={`${h3} logo`} />
          <div className="hover-text">Click to see more</div>
        </div>
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
