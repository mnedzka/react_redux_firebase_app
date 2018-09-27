import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container setcion project-details">
      <div className="card z-depth-zero">
        <div className="card-content">
          <span className="card-title">
            Project title
            {id}
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, cupiditate doloremque mollitia accusantium ad iste
            voluptas eum quibusdam animi, ab incidunt. Sequi id magni
            dignissimos minima aspernatur, minus reiciendis? Iure.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by the net ninjs</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
