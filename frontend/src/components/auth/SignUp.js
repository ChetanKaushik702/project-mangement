import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';

function SignUp() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);

    //   const myForm = new FormData();
    //   myForm.set("fname", data.fname);
    //   myForm.set("lname", data.lname);
    //   myForm.set("email", data.email);
    //   myForm.set("password", data.password);

    //   dispatch(registerUser(myForm));
      dispatch(registerUser(data));
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(data => ({...data, [id]: value}));
  }
  return (
    <div className='container'>
        <form className='white' onSubmit={handleSubmit}>
            <h5 className='grey-text text-darken-3'>Sign Up</h5>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={handleChange} required/>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={handleChange} required/>
            </div> 
            <div className='input-field'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' id='fname' onChange={handleChange} required/>
            </div>
            <div className='input-field'>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' id='lname' onChange={handleChange} required/>
            </div>
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'>Login</button>
            </div>
        </form>
    </div>
  );
}

export default SignUp;
