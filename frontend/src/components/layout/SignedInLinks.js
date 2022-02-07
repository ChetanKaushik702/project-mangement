import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';
import { GET_ALL_PROJECTS_RESET } from '../../store/constants/projectConstants';

const SignedInLinks = () => {
  const dispatch = useDispatch();
  const { user: { user } } = useSelector(state => state.auth);
  const handleClick = (e) => {
    dispatch(logout());
    dispatch({ type: GET_ALL_PROJECTS_RESET });
  }
  return (
      <ul className='right'>
          <li><NavLink to='/create'>New Project</NavLink></li>
          <li><NavLink to='/' onClick={handleClick}>Log Out</NavLink></li>
          {user && <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{`${user.fname[0]}${user.lname[0]}`}</NavLink></li>}
      </ul>
  );
};

export default SignedInLinks;
