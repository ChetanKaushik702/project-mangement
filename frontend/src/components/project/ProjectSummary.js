import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'> 
            <span className='card-title'>{project.title}</span>
            <p>{project.description}</p>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className='grey-text'>{project.createdOn.substr(0, 10)}</p>
        </div>
    </div>
  );
};

export default ProjectSummary;
