import React, { useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { useDispatch } from 'react-redux';

function CreateProject(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProject(data));
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(data => ({...data, [id]: value}));
  }
  return (
    <div className='container'>
        <form className='white' onSubmit={handleSubmit}>
            <h5 className='grey-text text-darken-3'>Create</h5>
            <div className='input-field'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' onChange={handleChange} required/>
            </div>
            <div className='input-field'>
                <label htmlFor='description'>Description</label>
                <textarea id='description' className='materialize-textarea' onChange={handleChange} required/>
            </div> 
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'>Create</button>
            </div>
        </form>
    </div>
  );
}

export default CreateProject;
