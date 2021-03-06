import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
            <Link to='/' className='brand-logo'>XtremePlan</Link>
            {
              isAuthenticated !== undefined && isAuthenticated ? <SignedInLinks /> :  <SignedOutLinks />
            }
        </div>
    </nav>
  );
};

export default Navbar;
