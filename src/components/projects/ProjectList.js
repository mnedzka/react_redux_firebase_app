import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(projects => {
          <ProjectSummary projects={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
