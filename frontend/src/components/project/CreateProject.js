import React, { useEffect, useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CREATE_PROJECT_RESET } from '../../store/constants/projectConstants';

function CreateProject(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCreated } = useSelector(state => state.createProject);
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProject(data));
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(data => ({...data, [id]: value}));
  }

  useEffect(() => {
    if (isCreated) {
      navigate('/');
      dispatch({ type: CREATE_PROJECT_RESET });
    }
  }, [isCreated, navigate, dispatch]);

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
