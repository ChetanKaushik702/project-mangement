import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  const [data, setData] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(data));
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(data => ({...data, [id]: value}));
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='container'>
        <form className='white' onSubmit={handleSubmit}>
            <h5 className='grey-text text-darken-3'>Sign In</h5>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={handleChange} required/>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={handleChange} required/>
            </div> 
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'>Login</button>
            </div>
        </form>
    </div>
  );
}

export default SignIn;
