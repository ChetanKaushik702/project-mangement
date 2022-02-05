import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const SignedInLinks = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(logout());
  }
  return (
      <ul className='right'>
          <li><NavLink to='/create'>New Project</NavLink></li>
          <li><NavLink to='/' onClick={handleClick}>Log Out</NavLink></li>
          <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CK</NavLink></li>
      </ul>
  );
};

export default SignedInLinks;
