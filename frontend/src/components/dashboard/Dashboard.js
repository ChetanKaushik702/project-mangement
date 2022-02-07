import React, { useEffect } from 'react';
import ProjectList from '../project/ProjectList';
// import Notifications from './Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/actions/projectActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.loadProjects);
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);
  return (
    <div className='dashboard container'>
        <div className='row'>
            <div className='col s12 m6'>
                {
                  projects && <ProjectList projects={projects}/>
                }
            </div>
            {/* <div className='col s12 m5 offset-m1'>
                <Notifications />
            </div> */}
        </div>
    </div>
  );
};

export default Dashboard;
