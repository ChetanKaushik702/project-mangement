import React from 'react';
import { useParams } from 'react-router';

function ProjectDetails(props) {
  const { id } = useParams();
  return (
    <div className='container section project-details'>
        <div className='card z-depth-0'>
            <div className='card-content'>
                <span className='card-title'>Project Title {id}</span>
                <p>This is extended details</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
                <div>Posted by CK</div>
                <div>3rd February, 11:23AM</div>
            </div>
        </div>
    </div>
  );
}

export default ProjectDetails;
